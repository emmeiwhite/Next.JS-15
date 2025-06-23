import Link from 'next/link'

function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-2xl font-bold mb-5">All Services</h1>

      <div className="flex gap-6">
        <Link href="/services/web-dev">Web Development</Link>
        <Link href="/services/seo">SEO</Link>
      </div>
    </div>
  )
}
export default Services
