import { Hero } from '@/components/Hero'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { generateMeta } from '@/utils/generateMeta'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import type { Page } from '~/payload-types'

const getCachedGetPageBySlug = ({ slug }: { slug: string }) => {

  return unstable_cache<() => Promise<Page>>(
    async () => {
      const payload = await getPayload({ config: configPromise })
      const result = await payload.find({
        collection: 'pages',
        limit: 1,
        where: {
          slug: {
            equals: slug,
          },
        },
      })

      return result.docs?.[0] || null
    },
    [`pages_${slug}`],
    {
      tags: [`pages_${slug}`],
    },
  )
}

// eslint-disable-next-line no-restricted-exports
export default async function Page({ params: { slug = 'home'}}) {
	const url = '/' + slug
	const page = await getCachedGetPageBySlug({
    slug,
  })()

	if (!page) {
    return notFound()
  }

  return (
		<React.Fragment>
			{/* <PayloadRedirects url={url} /> */}
			{ page?.hero  ? <Hero {...page?.hero} /> : null}
			{/* <Blocks blocks={page?.layout} locale="en" /> */}
		</React.Fragment>
	);
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    limit: 1000,
  })

  return pages.docs?.map(({ slug }) => slug)
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const page = await getCachedGetPageBySlug({
    slug,
  })()

  return generateMeta({ doc: page })
}