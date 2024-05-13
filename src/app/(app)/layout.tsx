import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import cn from '@/utils/cn'
import { Inter as FontSans } from 'next/font/google'

import { mergeOpenGraph } from '@/utils/mergeOpenGraph'
import { Metadata } from 'next'
import '../../../globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
  display: 'swap'
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cn(
          'min-h-screen h-full bg-background font-sans antialiased',
          fontSans.variable,
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://google.com'),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@bcantrell1',
  },
}
