import Link from 'next/link'

function Header() {
  return (
    <header>
      <nav className="max-w-6xl mx-auto flex gap-6 mb-8 px-6 py-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/blogs">Blogs</Link>
      </nav>
    </header>
  )
}
export default Header
