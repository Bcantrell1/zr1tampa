import cn from '@/utils/cn'
import React from 'react'

// eslint-disable-next-line

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section className={cn('py-8 md:py-12', className)} id={id}>
      {children}
    </section>
  )
}