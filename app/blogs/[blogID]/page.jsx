function BlogDetail(props) {
  const { params } = props
  console.log(params.blogID)
  // We'll make another API call and get the Blog with this particular blogID
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-2xl mb-5">
        {' '}
        Blog about: <strong>{params.blogID}</strong>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iste, iure repudiandae
        reprehenderit optio ad voluptatem cum aspernatur odio labore cupiditate facere ipsa
        voluptate repellendus impedit nihil. Tempore, aut nisi!
      </p>
    </div>
  )
}
export default BlogDetail
