'use client'
import React from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'
import type { Header } from 'payload-types'
import { DesktopMenu } from '../DesktopMenu'
import { Logo } from '../Logo'
import { MobileMenu } from '../MobileMenu'

// eslint-disable-next-line

export function ClientHeader({ initialHeader }: { initialHeader: Header | null }) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div className="flex items-center justify-between w-full px-4 py-4">
      <Logo />
      {isDesktop ? <DesktopMenu header={initialHeader} /> : <MobileMenu />}
    </div>
  )
}