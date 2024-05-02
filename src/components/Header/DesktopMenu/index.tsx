import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ModeToggle } from '../../theme-toggle'
import { Button } from '../../ui/button'
import { NavigationMenu, NavigationMenuList } from '../../ui/navigation-menu'
import { CompanyNav } from './CompanyNav'
import { MultiNav } from './MultiNav'
import { SingleNav } from './SingleNav'

export const DesktopMenu: React.FC<{ header: any }> = ({ header }) => {
  const navItems = header?.navItems || []
  const navGroups = navItems.map((item: any) => item.navGroup)
  const firstFourNavGroups = navGroups.slice(0, 4)
  const lastOfNavGroups = navGroups.slice(4)

  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-4">
        <NavigationMenu className="z-20">
          <NavigationMenuList>
            {firstFourNavGroups.map((item: any, i: any) => {
              if (item.links.length == 1) {
                const href = `/${
                  item.links[0].link.reference.value.slug === 'home'
                    ? ''
                    : item.links[0].link.reference.value.slug
                }`
                return <SingleNav key={i} label={item.links[0].link.label} link={href} />
              }
              return <MultiNav key={i} label={item.label} small={false} links={item.links} />
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="z-10">
          <NavigationMenuList>
            {lastOfNavGroups.map((item: any, i: any) => {
              if (item.links.length == 1) {
                const href = `/${
                  item.links[0].link.reference.value.slug === 'home'
                    ? ''
                    : item.links[0].link.reference.value.slug
                }`
                return <SingleNav key={i} label={item.links[0].link.label} link={href} />
              }
              if (item.label === 'Company') {
                return <CompanyNav key={i} label={item.label} links={item.links} />
              }
              return <MultiNav key={i} label={item.label} links={item.links} small />
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex justify-center gap-3">
        <Link href="/contact">
          <Button className="font-bold" variant="outline">
            Contact Us
          </Button>
        </Link>
        <ModeToggle />
        <Link href="tel:+15202365474">
          <Image alt="Zr1 Phone" height={40} src="/icons/telephone.svg" width={40} />
        </Link>
      </div>
    </React.Fragment>
  )
}
