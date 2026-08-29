const fallbackSiteUrl = 'https://khaanchwala.vercel.app'
const configuredSiteUrl = process.env.NEXT_PUBLIC_SERVER_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL
const SITE_URL = configuredSiteUrl && !configuredSiteUrl.includes('your-project.vercel.app') ? configuredSiteUrl : fallbackSiteUrl

const routes = [
  '/', '/about-us', '/services', '/industries', '/portfolio', '/process', '/testimonials', '/blog', '/faq', '/contact', '/privacy-policy', '/terms-conditions',
  '/services/toughened-glass', '/services/shower-cubicles', '/services/glass-partitions', '/services/office-glass-cabins', '/services/custom-wall-mirrors', '/services/decorative-mirrors', '/services/glass-railings-balustrades', '/services/aluminium-sliding-windows', '/services/upvc-windows', '/services/mesh-doors', '/services/fusion-glass-beveling', '/services/glass-polishing', '/services/pvd-work-aluminium-profiles', '/services/aristo-wardrobes',
  '/services/frameless-glass-partitions', '/services/aluminium-framed-partitions', '/services/half-glass-partitions', '/services/sliding-glass-partitions', '/services/double-glazed-partitions', '/services/curved-glass-partitions',
  '/industries/residential', '/industries/apartments', '/industries/villas', '/industries/offices', '/industries/hotels', '/industries/restaurants-cafes', '/industries/hospitals', '/industries/retail-stores', '/industries/salons-gyms',
  '/portfolio/residential-projects', '/portfolio/commercial-projects', '/portfolio/before-after', '/portfolio/video-gallery',
  '/process/site-visit', '/process/measurement', '/process/design', '/process/fabrication', '/process/installation', '/process/after-sales-support',
  '/blog/glass-buying-guide', '/blog/mirror-design-ideas', '/blog/shower-cubicle-guide', '/blog/office-partition-guide', '/blog/glass-maintenance-tips', '/blog/interior-design-trends',
]

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/api/*', '/_next/*', '/search'],
  additionalPaths: async () => routes.map((path) => ({ loc: path, changefreq: 'weekly', priority: path === '/' ? 1 : 0.8 })),
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }],
  },
}
