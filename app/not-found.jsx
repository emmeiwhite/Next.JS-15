import Link from 'next/link'

function PageNotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col  justify-center gap-6 items-center">
        <h1 className="text-6xl font-bold ">Page not Found</h1>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  )
}
export default PageNotFound
