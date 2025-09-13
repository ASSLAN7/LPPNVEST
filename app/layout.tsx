import type { ReactNode } from 'react'

export const metadata = { title: 'LPP invest', description: 'Dashboard' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body style={{margin:0, background:'#0b0f14', color:'#e5e7eb', fontFamily:'ui-sans-serif, system-ui, Segoe UI, Roboto'}}>
        {children}
      </body>
    </html>
  )
}
