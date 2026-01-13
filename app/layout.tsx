import type { Metadata } from 'next'
import { Inter, Arvo, Roboto, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arvo',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Trevor Osswald - Product Designer',
  description: 'Product designer in Austin. Currently working on healthcare and claims tools at Experian Health.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${arvo.variable} ${roboto.variable} ${montserrat.variable}`}>
      <body>
        {children}
        
        {/* Analytics Script */}
        <Script
          src="https://cdn.visitors.now/v.js"
          data-token="baa812f1-6265-486e-8f75-3e450d4e957f"
          strategy="afterInteractive"
        />
        
        {/* Cal.com Embed Script */}
        <Script id="cal-embed" strategy="lazyOnload">
          {`
            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "intro-call", {origin:"https://app.cal.com"});
            Cal.ns["intro-call"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#171717"},"dark":{"cal-brand":"#fcfcfc"}},"hideEventTypeDetails":false,"layout":"month_view"});
          `}
        </Script>
      </body>
    </html>
  )
}
