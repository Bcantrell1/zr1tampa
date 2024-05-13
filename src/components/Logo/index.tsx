import LogoSrc from '@/public/logo_light.png'
import Image from 'next/image'
import React from 'react'

export const Logo: React.FC = () => {
  return (
    <React.Fragment>
      <a className="hidden dark:block" href="/">
				<Image src={LogoSrc} height={70} width={190} alt="Dashboard Logo" />
      </a>
    </React.Fragment>
  )
}