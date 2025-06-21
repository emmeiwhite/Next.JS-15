import Link from 'next/link'

export default function Home() {
  console.log('From Server')
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1>Technical Agency</h1>

      <p>We provide IT/Software technical skills</p>
    </div>
  )
}
