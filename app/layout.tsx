import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://todayfix.in'),
  title: 'Todayfix | Local services in one app',
  description:
    'Explore local home services, moving, repairs, pest control and more with the Todayfix mobile app.',
  openGraph: {
    title: 'Todayfix | Local services in one app',
    description:
      'Explore local home services, moving, repairs, pest control and more with the Todayfix mobile app.',
    url: 'https://todayfix.in',
    siteName: 'Todayfix',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/todayfix-icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f4fa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className="light">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
