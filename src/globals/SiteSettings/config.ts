import type { GlobalConfig } from 'payload'

import { revalidateSiteSettings } from './hooks/revalidateSiteSettings'

const socialPlatformOptions = [
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'Twitter / X', value: 'twitter' },
  { label: 'GitHub', value: 'github' },
  { label: 'YouTube', value: 'youtube' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Facebook', value: 'facebook' },
] as const

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    { name: 'siteName', type: 'text', required: true, defaultValue: 'Kaanch Wala' },
    { name: 'siteDescription', type: 'textarea' },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Site logo used in header and footer.' },
    },
    { name: 'favicon', type: 'upload', relationTo: 'media' },
    {
      name: 'socialLinks',
      type: 'array',
      admin: { description: 'Social profile URLs', initCollapsed: true },
      fields: [
        { name: 'platform', type: 'select', required: true, options: [...socialPlatformOptions] },
        { name: 'url', type: 'text', required: true },
      ],
    },
    { name: 'analyticsId', type: 'text' },
    { name: 'contactEmail', type: 'email' },
    { name: 'contactPhone', type: 'text' },
    { name: 'address', type: 'textarea' },
  ],
  hooks: { afterChange: [revalidateSiteSettings] },
}
