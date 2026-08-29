import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Locale } from '@/i18n/config'

type Global = keyof Config['globals']
type GlobalData<K extends Global> = Config['globals'][K]

/**
 * Fetch a Payload global. The generic return type keeps literal global slugs
 * tied to their generated Payload type instead of widening to a union.
 */
export async function getCachedGlobal<K extends Global>(
  slug: K,
  depth = 0,
  locale: Locale = 'en',
): Promise<GlobalData<K>> {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
    locale,
  })

  return global as GlobalData<K>
}
