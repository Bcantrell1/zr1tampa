import getHeader from '@/payload/utils/fetchHeader';
import type { Header } from 'payload-types';
import { ClientHeader } from './ClientHeader';

const Header = async () => {
	let header: Header | null = null;

	try {
		header = await getHeader();
	} catch (error) {
		// console.log(error)
	}

  return <ClientHeader initialHeader={header} />
}

export default Header
