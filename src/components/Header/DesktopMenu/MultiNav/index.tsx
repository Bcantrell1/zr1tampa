'use client'
import Link from 'next/link'
import React from 'react'

import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuTrigger,
} from '../../../ui/navigation-menu'
import ListItem from '../../ListItem'

export const MultiNav = ({ label, links, small = false }: {label: any, links: any, small: boolean}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-bold">{label}</NavigationMenuTrigger>
      <NavigationMenuContent className="relative z-50">
        <ul
          className={
            small === true
              ? 'grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]'
              : 'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'
          }
        >
          {links.map((item: any, i: any) => {
            const href = `/${
              item.link.reference.value.slug === 'home' ? '' : item.link.reference.value.slug
            }`
            return (
              <Link href={href} key={i} passHref>
                <ListItem title={item.link.label}>{item.link.description}</ListItem>
              </Link>
            )
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}