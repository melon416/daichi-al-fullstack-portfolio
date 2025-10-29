import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daichi Yamamoto - Full Stack Developer',
  description: 'AI & Automation Engineer and Full Stack Developer with 7+ years of experience architecting, deploying, and scaling AI-driven automation systems and software solutions.',
  keywords: 'Full Stack Developer, AI Engineer, Automation, React, Next.js, Python, Machine Learning',
  authors: [{ name: 'Daichi Yamamoto' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Daichi Yamamoto - Full Stack Developer',
    description: 'AI & Automation Engineer and Full Stack Developer with 7+ years of experience',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
