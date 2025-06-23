export const metadata = {
  title: 'Blogs | Technical Agency'
}
import Link from 'next/link'

function Blogs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-3xl font-semibold mb-5">Blogs</h1>

      <ul>
        <li>
          <Link
            href="/blogs/1"
            className="text-blue-600 hover:underline">
            Blog1
          </Link>
        </li>
        <li>
          <Link
            href="/blogs/2"
            className="text-blue-600 hover:underline">
            Blog2
          </Link>
        </li>
        <li>
          <Link
            href="/blogs/3"
            className="text-blue-600 hover:underline">
            Blog3
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Blogs
