import { IoBagRemoveOutline } from "react-icons/io5";

import "./cartwidget.css"

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <IoBagRemoveOutline size={35}/>
      <p className="number">1</p>
    </div>
  )
}
export default CartWidget