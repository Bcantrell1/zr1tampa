'use client'
import Link from 'next/link'
import React from 'react'

import { NavigationMenuContent } from '@radix-ui/react-navigation-menu'
import {
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from '../../../ui/navigation-menu'

export const SingleNav = ({ label, link }: {label: string, link: string}) => {
  return (
    <NavigationMenuItem asChild>
				<Link href={link}>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>
						<p className="font-bold">{label}</p>
					</NavigationMenuLink>
				</Link>
    </NavigationMenuItem>
  )
}
