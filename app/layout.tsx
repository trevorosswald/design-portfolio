import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import './portfolio.css'

export const metadata: Metadata = {
  title: 'Trevor Osswald - Product Designer',
  description: 'Product designer based in Austin, Texas, with a growing focus on design engineering. Currently at MyCarrier, previously Experian Health and Bushel Powered. Founder of The Sword.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cdn.visitors.now/v.js"
          data-token="baa812f1-6265-486e-8f75-3e450d4e957f"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
