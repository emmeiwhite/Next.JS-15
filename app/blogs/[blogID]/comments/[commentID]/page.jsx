function Comment({ params }) {
  console.log(params)
  const { blogID, commentID } = params
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-3xl font-semibold">Individual Comment</h1>

      <p>
        Comment <span className="font-semibold">{commentID} </span>
        from Blog <span className="font-semibold">{blogID}</span>
      </p>
    </div>
  )
}
export default Comment
