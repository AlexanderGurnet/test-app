import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import { Layout } from '../app-fsd/Layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yoldi Agency',
  description: 'Web Application',
}

export default function RootLayout({
  children,
}: Readonly<{
  params: any
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
