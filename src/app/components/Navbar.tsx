'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Introduction' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-white hover:text-blue-400 transition">
          Finn Luu
        </Link>
        <ul className="flex gap-6 text-sm text-gray-300">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition hover:text-blue-400 ${
                  pathname === link.href ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
