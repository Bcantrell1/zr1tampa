// @ts-nocheck
'use client'
import AutoPlay from 'embla-carousel-autoplay'
import NextImage from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { useEffect, useState } from 'react'

import type { CarouselApi } from '@/components/ui/carousel'
import { CarouselContent, Carousel as CarouselEle, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'

import cssVariables from '../../../cssVariables.cjs'

const { breakpoints } = cssVariables

export const Carousel = ({mediaGroup}) => {
  const mediaList = mediaGroup || []
  const [isLoading, setIsLoading] = useState(true)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const autoplay = api?.plugins()?.autoplay

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleHover = index => {
    api.scrollTo(index, true)
    autoplay.stop()
  }

  const handleColLeave = () => {
    autoplay.play()
  }

  return (
    <CarouselEle
      className="w-full h-2/3 relative"
      opts={{ loop: true }}
      plugins={[
        AutoPlay({
          delay: 7000,
          stopOnFocusIn: true,
          stopOnLastSnap: false,
        }),
      ]}
      setApi={setApi}
    >
      <CarouselContent>
        {mediaList.map((media, i) => {
          const {
            alt,
            filename,
            fill,
            height,
            imgClassName,
            onLoad: onLoadFromProps,
            priority,
            sizes: sizesFromProps,
            width,
          } = media.media
          let src = null;
          const sizes =
            sizesFromProps ||
            Object.entries(breakpoints)
              .map(([, value]) => `(max-width: ${value}px) ${value}px`)
              .join(', ')
          src = `${process.env.NEXT_PUBLIC_S3_PUBLIC_URL}/${filename}`

          return (
            <CarouselItem className="pl-0" key={i}>
              <Card className="border-none">
                <CardContent className="flex w-full p-0 items-center justify-center" />
                <NextImage
                  alt={alt || ''}
                  className={[isLoading, imgClassName, 'w-full h-full max-h-[800px]']
                    .filter(Boolean)
                    .join(' ')}
                  fill={fill}
                  height={!fill ? height : undefined}
                  onLoad={() => {
                    setIsLoading(false)
                  }}
                  priority={priority}
                  quality={100}
                  // sizes={sizes}
                  src={src}
                  width={!fill ? width : undefined}
                />
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <div className="absolute bg-opacity-25 bg-black top-0 left-0 h-full w-full grid grid-cols-3 grid-flows-auto invisible md:visible">
        <Column
          className=""
          href="/services"
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={handleColLeave}
        >
          <h3 className="text-2xl uppercase">suspension services</h3>
          <div className="uppercase group-hover:pb-5">factory suspension services</div>
        </Column>
        <Column
          className=""
          href="/products"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={handleColLeave}
        >
          <h3 className="text-2xl uppercase">race tech products</h3>
          <div className="uppercase group-hover:pb-5">race tech products</div>
        </Column>
        <Column
          className=""
          href="/bike-setup"
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={handleColLeave}
        >
          <h3 className="text-2xl uppercase">track side support</h3>
          <div className="uppercase group-hover:pb-5">lets get your bike setup</div>
        </Column>
      </div>
    </CarouselEle>
  )
}

const Column = ({ children, className, href, onMouseEnter, onMouseLeave }) => {
  return (
    <Link
      className={`${className} border-r border-r-gray-400 border-opacity-55 pl-3 pr-3 pb-6 group flex flex-col align-end justify-end`}
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="text-center text-white">{children}</div>
    </Link>
  )
}
