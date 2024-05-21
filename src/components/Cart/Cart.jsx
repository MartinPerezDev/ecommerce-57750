import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { carrito, vaciarCarrito, borrarProductoPorId, precioTotal } = useContext(CartContext)

  //early return
  if(carrito.length === 0){
    return (
      <div>
        <h1>El carrito esta vacio 😥</h1>
        <Link to="/" >Ver productos</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Carrito de compras</h1>
      {
        carrito.map( (productoCarrito)=> (
          <div key={productoCarrito.id} style={{ display: "flex", justifyContent: "space-around" }}>
            <img src={productoCarrito.image} width={100} alt="" />
            <h3> {productoCarrito.name} </h3>
            <h3> cantidad: { productoCarrito.quantity } </h3>
            <h3> precio unitario: {productoCarrito.price} </h3>
            <h3> precio parcial: { productoCarrito.price * productoCarrito.quantity } </h3>
            <button onClick={ () => borrarProductoPorId(productoCarrito.id) } >Borrar</button>
          </div>
        ))
      }
      <h2>Total de la compra : ${ precioTotal() }</h2>
      <button onClick={vaciarCarrito} >Vaciar carrito</button>
    </div>
  )
}
export default Cart