'use client'
import Link from 'next/link'
import React from 'react'

import {
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from '../../../ui/navigation-menu'

export const SingleNav = ({ label, link }: {label: string, link: string}) => {
  return (
    <NavigationMenuItem>
      <Link prefetch={false} href={link} legacyBehavior>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <p className="font-bold">{label}</p>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
