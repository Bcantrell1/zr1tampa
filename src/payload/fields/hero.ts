import type { Field } from 'payload/types'

export const hero: Field = {
  name: 'hero',
  fields: [
    {
      name: 'type',
      defaultValue: 'heroCaro',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Hero Caro',
          value: 'heroCaro',
        },
      ],
      required: true,
      type: 'select',
    },
    {
      name: 'mediaGroup',
      fields: [
        {
          name: 'media',
          relationTo: 'media',
          required: true,
          type: 'upload',
        },
      ],
      maxRows: 3,
      minRows: 1,
      type: 'array',
    },
  ],
  label: false,
  type: 'group',
}