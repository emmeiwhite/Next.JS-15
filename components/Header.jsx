'use client'

import Link from 'next/link'
import { useState } from 'react'
import { LuSun, LuMoon } from 'react-icons/lu'

function Header() {
  // Dummy values --- Will get from the Context
  const [isDark, setIsDark] = useState(false)

  function handleTheme() {
    setIsDark(prev => !prev)
  }
  return (
    <header className="bg-gray-50 shadow">
      <div className="max-w-6xl mx-auto flex gap-6 px-5 py-5 justify-between">
        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>

        <button
          className="cursor-pointer text-2xl"
          onClick={handleTheme}>
          {isDark ? (
            <span>
              {' '}
              <LuSun />
            </span>
          ) : (
            <span>
              {' '}
              <LuMoon />
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
export default Header
