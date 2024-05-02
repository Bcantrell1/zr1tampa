import { getPayload } from '@/lib/payload';
import { unstable_cache } from 'next/cache';
import 'server-only';
import { Header } from '~/payload-types';
import { GLOBAL_HEADER_FIELD } from '../globals/Header';

const getHeader = unstable_cache(
	async (): Promise<Header | null> => {
		const payload = await getPayload();
		const header = await payload.findGlobal({
			slug: GLOBAL_HEADER_FIELD,
			depth: 1
		});

		return header || null;
	},
	['header'],
	{ revalidate: 60, tags: ['header']}
)

export default getHeader