import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist in this site version.</p>
      <Link className="btn btn-primary" to="/">
        Go back home
      </Link>
    </section>
  )
}

export default NotFoundPage
