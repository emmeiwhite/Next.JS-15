async function BlogDetail({ params }) {
  const { blogID } = await params
  console.log(blogID)
  // We'll make another API call and get the Blog with this particular blogID
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-2xl mb-5">
        {' '}
        Blog about: <strong>{blogID}</strong>
      </h1>
    </div>
  )
}
export default BlogDetail
