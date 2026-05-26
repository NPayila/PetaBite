import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h1>PetaBite</h1>
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/menu">Menu</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/login">Login</Link>

      </div>

    </nav>
  )
}

export default Navbar