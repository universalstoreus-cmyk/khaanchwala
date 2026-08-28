import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Locale } from '@/i18n/config'

type Global = keyof Config['globals']

/**
 * Fetch a Payload global. Keep this request dynamic so the latest values
 * saved from the admin panel are reflected without requiring Next.js
 * cacheComponents / "use cache" support.
 */
export async function getCachedGlobal(slug: Global, depth = 0, locale: Locale = 'en') {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
    locale,
  })

  return global
}
