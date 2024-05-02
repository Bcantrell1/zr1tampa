import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Balancer from 'react-wrap-balancer'

import { Section } from '@/components/Section'
import type { Footer } from 'payload-types'
import { Button } from '../../ui/button'

export default function Footer({ initialFooter }: { initialFooter: Footer | null }) {
  const navItems = initialFooter?.navItems || []

  return (
    <footer>
      <Section>
        <div className="grid gap-6 mx-auto p-6 sm:p-8">
          <div className="flex flex-col gap-6 not-prose ">
            <Link className="hidden dark:block w-fit" href="/">
              <Image alt="Zr1 Logo" height={37} src="/logo_light.png" width={140} />
            </Link>

            {/* Dark Logo */}
            <Link className="dark:hidden w-fit" href="/">
              <Image alt="Zr1 Logo" height={37} src="/logo_dark.png" width={140} />
            </Link>
            <p>
              <Balancer>Motorcycle Suspension Service</Balancer>
            </p>
          </div>
          <div className="flex gap-4 flex-col md:flex-row mb-4 md:mb-0">
            {navItems.map(navItem => (
              <Link href={navItem.link?.url || ''} key={navItem?.link?.url}>
                {navItem?.link?.label}
              </Link>
            ))}
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
        <div className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center mx-auto p-6 sm:p-8">
          <div className="flex gap-2">
            <Button size="icon" variant="outline">
              <Instagram />
            </Button>
            <Button size="icon" variant="outline">
              <Twitter />
            </Button>
            <Button size="icon" variant="outline">
              <Facebook />
            </Button>
          </div>
          <p className="text-muted-foreground">
              Zr1 Tampa | All rights reserved. 2024-present. | Dev © <a href="https://github.com/bcantrell1">Bcantrell1</a>
          </p>
        </div>
      </Section>
    </footer>
  )
}
