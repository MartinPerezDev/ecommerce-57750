import { createContext, useState } from "react";

//Creamos un contexto de React llamado CartContext
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarProducto = (nuevoProducto) => {
    //sumar cantidad en caso de que el producto ya este en el carrito
    setCarrito([ ...carrito, nuevoProducto ])
  }

  const cantidadTotal = () => {
    const cantidadTotalProductos = carrito.reduce( (total, producto) => total + producto.quantity, 0 )
    return cantidadTotalProductos
  }

  const vaciarCarrito = () =>{
    setCarrito([])
  }

  //funcion para detectar productos duplicados
  //funcion para eliminar un producto especifico

  return(
    <CartContext.Provider value={ { carrito, agregarProducto, cantidadTotal, vaciarCarrito } } >
      { children }
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }