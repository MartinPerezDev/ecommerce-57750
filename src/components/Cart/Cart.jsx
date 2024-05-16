import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { carrito, vaciarCarrito } = useContext(CartContext)

  return (
    <div>
      <h1>Carrito de compras</h1>
      {
        carrito.map( (productoCarrito)=> (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <img src={productoCarrito.image} width={100} alt="" />
            <h3> {productoCarrito.name} </h3>
            <h3> cantidad: { productoCarrito.quantity } </h3>
            <h3> precio unitario: {productoCarrito.price} </h3>
            <h3> precio parcial: { productoCarrito.price * productoCarrito.quantity } </h3>
          </div>
        ))
      }
      <button onClick={vaciarCarrito} >Vaciar carrito</button>
    </div>
  )
}
export default Cart