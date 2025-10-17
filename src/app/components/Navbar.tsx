'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Introduction' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/certificates', label: 'Certificates' },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
        <ul className="flex gap-8 text-sm text-gray-300">
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
