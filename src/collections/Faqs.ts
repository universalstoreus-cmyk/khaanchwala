import type { CollectionConfig } from 'payload'

import { revalidateTag } from 'next/cache'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { slugField } from 'payload'

export const Faqs: CollectionConfig<'faqs'> = {
  slug: 'faqs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['question', 'sortOrder'],
    useAsTitle: 'question',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      admin: {
        description: 'e.g. Installation, Pricing, Warranty',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show on frontend',
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          revalidateTag('faqs', 'max')
        }
      },
    ],
    afterDelete: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          revalidateTag('faqs', 'max')
        }
      },
    ],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}

export const FaqBlock: any = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  fields: [],
}