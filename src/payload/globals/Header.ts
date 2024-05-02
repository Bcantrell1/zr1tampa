import type { GlobalConfig } from 'payload/types';

import link from '../fields/link';

export const GLOBAL_HEADER_FIELD = 'header';

export const Header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      fields: [
        {
          name: 'navGroup',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'links',
              fields: [
                link({
                  appearances: false,
                }),
              ],
              minRows: 1,
              type: 'array',
            },
          ],
          type: 'group',
        },
      ],
      maxRows: 7,
      type: 'array',
    },
  ],
  slug: 'header',
}