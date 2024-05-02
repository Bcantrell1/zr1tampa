import { getPayload } from '@/lib/payload';
import { unstable_cache } from 'next/cache';
import 'server-only';
import { Footer } from '~/payload-types';
import { GLOBAL_FOOTER_FIELD } from '../globals/Footer';

const getFooter = unstable_cache(
	async (): Promise<Footer | null> => {
		const payload = await getPayload();
		const footer = await payload.findGlobal({
			slug: GLOBAL_FOOTER_FIELD,
			depth: 1
		});

		return footer || null;
	},
	['footer'],
	{ revalidate: 60, tags: ['footer']}
)

export default getFooter