import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import cn from '@/utils/cn'
import { Inter } from 'next/font/google'

import '../../../globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
  display: 'swap'
})

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cn(
          'min-h-screen h-full bg-background font-sans antialiased',
          inter.variable,
        )}`}>
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout
