import epicLogo from "../../assets/epic.png"
import CartWidget from "./CartWidget"

import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img className="logo" src={epicLogo} alt="logo epic" />
      </div>
      <ul className="categorias">
        <li className="categoria">Acción/Aventura</li>
        <li className="categoria">Shooter</li>
        <li className="categoria">Survival</li>
      </ul>
      <CartWidget />
    </nav>
  )
}
export default NavBar