'use client'
import Link from 'next/link'
import React from 'react'

import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from '../../../ui/navigation-menu'
import ListItem from '../../ListItem'

export const CompanyNav = ({ label, links }: {label: string, links: any}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-bold">{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <div className="row-span-3">
            <NavigationMenuLink>
              <Link
                className="flex h-full w-full select-none flex-col justify-end bg-opacity-0 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/about"
								prefetch
                style={{
                  backgroundImage: `url('/cody_owner.jpg')`,
                  backgroundPosition: 'right',
                  backgroundSize: 'cover',
                }}
              >
                Cody
              </Link>
            </NavigationMenuLink>
          </div>
          {links.map((item: any, i: any) => {
            const href = `/${
              item.link.reference.value.slug === 'home' ? '' : item.link.reference.value.slug
            }`
            return (
              <Link prefetch as={href} href={href} key={i}>
                <ListItem title={item.link.label}>{item.link.description}</ListItem>
              </Link>
            )
          })}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}