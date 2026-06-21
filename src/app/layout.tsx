import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ela Erdem — Pilot & Yazılım Geliştirici',
  description: 'Ela Erdem - Pilot, İHA Pilotu, Bilgisayar Mühendisi ve Yazılım Geliştirici kişisel web sitesi ve dijital CV portfolyosu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
