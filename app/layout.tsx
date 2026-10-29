import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://todayfix.in'),
  title: 'Todayfix | Your home, in good hands',
  description:
    'Find trusted local professionals for home services, moving, repairs and more with Todayfix.',
  openGraph: {
    title: 'Todayfix | Your home, in good hands',
    description:
      'Find trusted local professionals for home services, moving, repairs and more with Todayfix.',
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
  themeColor: '#fbfaff',
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
