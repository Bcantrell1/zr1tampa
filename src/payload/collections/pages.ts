import { pathField, slugField } from '@/payload/fields';
import type { CollectionConfig } from 'payload/types';
import { heroBanner } from '../blocks/hero-banner';
import { blocksField } from '../fields/blocks';
import { hero } from '../fields/hero';

export const COLLECTION_SLUG_PAGE = 'pages'

export const pages: CollectionConfig = {
  slug: COLLECTION_SLUG_PAGE,
  admin: {
		defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
			required: true
    },
		{
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
						{
							name: 'layout',
							type: 'blocks',
							required: false,
							blocks: [heroBanner]
						}
          ],
        },
      ],
    },
    // blocksField(),
    slugField(),
    pathField()
  ]
}
