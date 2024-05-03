// @ts-nocheck
import React, { Fragment } from 'react'

import { Carousel } from '@/components/Carousel'
import { Page } from 'payload-types'

export const HeroCaro: React.FC<Page['hero']> = ({ mediaGroup }) => {
  return (
    <React.Fragment>
      <Carousel mediaGroup={mediaGroup} />
    </React.Fragment>
  )
}