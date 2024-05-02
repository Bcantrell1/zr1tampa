import React from 'react'

import fetchFooter from '@/payload/utils/fetchFooter'
import type { Footer } from 'payload-types'
import ClientFooter from './ClientFooter'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // console.error(error)
  }

  return <ClientFooter initialFooter={footer} />
}

