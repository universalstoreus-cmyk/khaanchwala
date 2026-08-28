import type { Block } from 'payload'

export const InstallationProcess: Block = {
  slug: 'installationProcess',
  interfaceName: 'InstallationProcessBlock',
  fields: [
    {
      name: 'steps',
      type: 'array',
      required: true,
      admin: {
        description: 'Installation process steps',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'number',
          type: 'number',
          required: true,
          admin: {
            description: 'Step number',
          },
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: {
            description: 'Lucide icon name (e.g. home, search, user)',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Step title',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Short description of this step',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Installation Process',
    singular: 'Installation Step',
  },
}
