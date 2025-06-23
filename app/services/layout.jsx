export const metadata = {
  title: 'Services | Technical Agency'
}

function ServicesLayout({ children }) {
  return (
    <div>
      <header className="max-w-6xl mx-auto px-6 bg-teal-300">
        {' '}
        Sub Header for Services Layout
      </header>
      {children}

      <footer className="max-w-6xl mx-auto px-6 bg-teal-300">
        {' '}
        Sub Footer for Services Layout
      </footer>
    </div>
  )
}
export default ServicesLayout
