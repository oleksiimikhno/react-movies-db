import './App.scss'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <img src="/logo.png" className="logo" alt="Logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
