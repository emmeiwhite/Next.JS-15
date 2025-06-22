async function BlogDetail(props) {
  const { params } = props
  console.log(await params.blogID)
  // We'll make another API call and get the Blog with this particular blogID
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h1> Dynamic BlogDetail</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iste, iure repudiandae
        reprehenderit optio ad voluptatem cum aspernatur odio labore cupiditate facere ipsa
        voluptate repellendus impedit nihil. Tempore, aut nisi!
      </p>
    </div>
  )
}
export default BlogDetail
