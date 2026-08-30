import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'
import { en } from '@payloadcms/translations/languages/en'

import { Awards } from './collections/Awards'
import { CaseStudies } from './collections/CaseStudies'
import { Categories } from './collections/Categories'
import { Customers } from './collections/Customers'
import { Demos } from './collections/Demos'
import { Faqs } from './collections/Faqs'
import { Leads } from './collections/Leads'
import { GlassOptions } from './blocks/GlassOptions/config'
import { LegalPages } from './collections/LegalPages'
import { Portfolio } from './collections/Portfolio'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Services } from './collections/Services'
import { Technologies } from './collections/Technologies'
import { TeamMembers } from './collections/TeamMembers'
import { Testimonials } from './collections/Testimonials'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { InstallationProcess } from './blocks/InstallationProcess/config'
import { SiteSettings } from './globals/SiteSettings/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { migrations } from './migrations'
import * as seedKaanchwalaServiceContent from './migrations/20260831_001000_seed_kaanchwala_service_content'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Vercel serverless functions are IPv4-only. Supabase direct database
// endpoints are IPv6 by default, so use Supavisor's IPv4 session pooler
// for Payload's Postgres adapter. Session mode (5432) also supports the
// connection/session behavior Payload needs, including migrations.
const rawDatabaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || ''

const databaseUrl = (() => {
  if (!rawDatabaseUrl) return ''

  const cleaned = rawDatabaseUrl
    .replace(/^DATABASE_URL\s*=\s*/i, '')
    .replace(/^POSTGRES_URL\s*=\s*/i, '')
    .trim()

  try {
    const url = new URL(cleaned)

    if (url.hostname === 'db.nnkmwaiifdkcsddptqca.supabase.co') {
      url.hostname = 'aws-0-ap-south-1.pooler.supabase.com'
      url.port = '5432'
      url.username = 'postgres.nnkmwaiifdkcsddptqca'
    }

    return url.toString()
  } catch {
    return cleaned
  }
})()

const prodMigrations = [
  ...migrations,
  {
    up: seedKaanchwalaServiceContent.up,
    down: seedKaanchwalaServiceContent.down,
    name: '20260831_001000_seed_kaanchwala_service_content',
  },
]

export default buildConfig({
  i18n: { supportedLanguages: { en }, fallbackLanguage: 'en' },
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Bulgarian', code: 'bg' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: { baseDir: path.resolve(dirname) },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: defaultLexical,
  db: postgresAdapter({
    pool: { connectionString: databaseUrl },
    prodMigrations,
  }),
  collections: [
    Pages, Posts, Media, Categories, Customers, Technologies, TeamMembers,
    Testimonials, Awards, Services, CaseStudies, Faqs, Leads, LegalPages,
    Demos, Portfolio, Users,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, SiteSettings],
  plugins,
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true
        const secret = process.env.CRON_SECRET
        if (!secret) return false
        return req.headers.get('authorization') === `Bearer ${secret}`
      },
    },
    tasks: [],
  },
})
