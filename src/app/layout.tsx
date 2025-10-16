import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Finn Luu | Software Engineer',
  description:
    'Portfolio of Finn Luu — Backend-focused software engineer passionate about scalability, clean architecture, and self-development.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
      </body>
    </html>
  )
}
