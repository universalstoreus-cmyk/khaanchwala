import type { Block } from 'payload'

export const GlassOptions: Block = {
  slug: 'glassOptions',
  interfaceName: 'GlassOptionsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Section heading (e.g. "Glass Options", "Available Glass Types")',
      },
    },
    {
      name: 'options',
      type: 'array',
      required: true,
      admin: {
        description: 'Glass type options',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Glass type image',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Glass type name (e.g. Clear Glass, Frosted Glass)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Short description of the glass type',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Glass Options',
    singular: 'Glass Option',
  },
}