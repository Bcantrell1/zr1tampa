import Blocks from '@/components/Blocks'
import { Hero } from '@/components/Hero'
import fetchPage from '@/payload/utils/fetchPage'
import React from 'react'

export const dynamic = 'force-dynamic'

const Page = async ({ params }: { params: { path: string[] } }) => {
  const page = await fetchPage(params.path)

  return (
		<React.Fragment>
			{ page?.hero  ? <Hero {...page?.hero} /> : null}
			{/* <Blocks blocks={page?.layout} locale="en" /> */}
		</React.Fragment>
	);
}

export async function generateStaticParams() {
  try {
    const pages = await fetchPage('pages')
    return [pages?.slug]
  } catch (error) {
    return []
  }
}

export default Page
