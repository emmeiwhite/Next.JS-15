/* ---
export function generateStaticParams() {
  return [{ blogID: '1' }, { blogID: '2' }, { blogID: '3' }, { blogID: '4' }, { blogID: '5' }]

  // let's make an API call to allow next js
}
  --- */

export const dynamicParams = false

export async function generateStaticParams() {
  const response = await fetch('https://dummyjson.com/recipes')
  const data = await response.json()
  console.log(data)
  // Returned array of blogID's on the basis of which Dynamically pages were rendered. Now the same pages are generated at build time, since these are frequently used pages in our application. How awesome is it that NEXT.JS renders the
  return data.recipes.map(recipe => ({
    blogID: `${recipe.id}`
  }))
}

// One Page to handle Dynamic Routes, which is fantastic
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
