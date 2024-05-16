import { IoBagRemoveOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cartwidget.css"

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  return (
    <Link to="/cart" className="cartwidget">
      <IoBagRemoveOutline size={35}/>
      <p className="number"> { cantidadTotal() } </p>
    </Link>
  )
}
export default CartWidget