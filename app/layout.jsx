import './globals.css'

import Header from '../components/Header'

export const metadata = {
  title: 'Technical Agency',
  description: 'This is the world-class institute for leading coders '
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
