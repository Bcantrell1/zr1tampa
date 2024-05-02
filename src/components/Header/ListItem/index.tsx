import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import cn from '@/utils/cn'
import React, { forwardRef } from 'react'


const ListItem = forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  ({ children, className, title, ...props }, ref) => {
    return (
      <div>
        <NavigationMenuLink asChild>
          <div
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            ref={ref}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </div>
        </NavigationMenuLink>
      </div>
    )
  },
)

ListItem.displayName = 'ListItem'

export default ListItem