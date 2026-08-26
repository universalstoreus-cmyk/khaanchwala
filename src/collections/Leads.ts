import type { CollectionConfig } from 'payload'
import { revalidateTag } from 'next/cache'
import { authenticated } from '@/access/authenticated'

import { slugField } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  access: {
    create: authenticated,
    delete: ({ req: { user } }) => user?.roles?.includes('admin'),
    read: ({ req: { user } }) => user?.roles?.includes('admin'),
    update: ({ req: { user } }) => user?.roles?.includes('admin'),
  },
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['name', 'email', 'service', 'status', 'createdAt'],
    placement: 'sidebar',
    description: 'Leads/Enquiries from website contact form',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name of the enquirer',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      admin: {
        description: 'Email address of the enquirer',
      },
    },
    {
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Phone number of the enquirer',
      },
    },
    {
      name: 'company',
      type: 'text',
      admin: {
        description: 'Company or organization name',
      },
    },
    {
      name: 'service',
      type: 'select',
      required: true,
      admin: {
        description: 'Service of interest',
        options: [
          { label: 'Frameless Glass Partitions', value: 'frameless-partitions' },
          { label: 'Aluminium Framed Partitions', value: 'aluminium-partitions' },
          { label: 'Half Glass Partitions', value: 'half-partitions' },
          { label: 'Sliding Glass Partitions', value: 'sliding-partitions' },
          { label: 'Double Glazed Partitions', value: 'double-glazed' },
          { label: 'Curved Glass Partitions', value: 'curved-partitions' },
          { label: 'Glass Doors', value: 'glass-doors' },
          { label: 'Office Glass Solutions', value: 'office-glass' },
          { label: 'Shower Enclosures', value: 'shower-enclosures' },
          { label: 'Glass Railings', value: 'glass-railings' },
          { label: 'Mirrors', value: 'mirrors' },
          { label: 'Custom Glass Solutions', value: 'custom-solutions' },
        ],
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Project location or area',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Enquiry message details',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'New',
      required: true,
      admin: {
        description: 'Current status of the lead',
        options: [
          { label: 'New', value: 'New' },
          { label: 'Contacted', value: 'Contacted' },
          { label: 'Qualified', value: 'Qualified' },
          { label: 'Quoted', value: 'Quoted' },
          { label: 'Converted', value: 'Converted' },
          { label: 'Closed', value: 'Closed' },
        ],
      },
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        description: 'Source of the lead (e.g., website, referral)',
        defaultValue: 'Website',
      },
    },
    {
      name: 'contactedAt',
      type: 'date',
      admin: {
        description: 'When the lead was first contacted',
        position: 'sidebar',
      },
    },
    {
      name: 'convertedAt',
      type: 'date',
      admin: {
        description: 'When the lead was converted/sold',
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          revalidateTag('leads', 'max')
        }
      },
    ],
    afterDelete: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          revalidateTag('leads', 'max')
        }
      },
    ],
  },
  timestamps: true,
}
