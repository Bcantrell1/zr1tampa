import LogoDark from '@/public/logo_dark.png'
import LogoLight from '@/public/logo_light.png'
import NextImage from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo: React.FC = () => {
  return (
    <React.Fragment>
      {/* Light Logo */}
      <Link className="hidden dark:block" href="/">
        <NextImage
          alt="Zr1 Logo"
          className="h-12 sm:h-16 md:h-24 lg:h-28 w-full md:w-[330px]"
          height={150}
          loading="lazy"
          src={LogoLight}
          width={330}
        />
      </Link>

      {/* Dark Logo */}
      <Link className="dark:hidden" href="/">
        <NextImage
          alt="Zr1 Logo"
          className="h-12 sm:h-16 md:h-24 lg:h-28 w-full md:w-[330px]"
          height={150}
          loading="lazy"
					src={LogoDark}
          width={330}
        />
      </Link>
    </React.Fragment>
  )
}
