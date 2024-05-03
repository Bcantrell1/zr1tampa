'use client'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { MenuIcon } from 'lucide-react'
import React from 'react'


export const MobileMenu: React.FC = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>My drawer items</DrawerContent>
    </Drawer>
  )
}