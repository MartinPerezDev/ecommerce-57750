import epicLogo from "../../assets/epic.png"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand link-navbar">
        <img className="logo" src={epicLogo} alt="logo epic" />
      </Link>
      <ul className="categorias">
        <Link to="/category/shooter" className="categoria link-navbar">Shooter</Link>
        <Link to="/category/survival" className="categoria link-navbar">Survival</Link>
      </ul>
      <CartWidget />
    </nav>
  )
}
export default NavBar