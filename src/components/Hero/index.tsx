import React, { FC } from 'react'

import { Page } from 'payload-types'
import { HeroCaro } from '../_heros/HeroCaro'

const heroes: any  = {
  heroCaro: HeroCaro,
}

export const Hero: React.FC<Page['hero']> = props => {
  const { type } = props || {}

  // if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}