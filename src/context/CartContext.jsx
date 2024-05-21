import { createContext, useState } from "react";

//Creamos un contexto de React llamado CartContext
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarProducto = (nuevoProducto) => {
    const condicion = estaEnElCarrito(nuevoProducto.id)
    if(condicion){
      //como el producto ya esta en el carrito entonces necesitamos sumar solamente la cantidad
      const productosModificados = carrito.map((productoCarrito)=> {
        if(productoCarrito.id === nuevoProducto.id){
          return { ...productoCarrito, quantity: productoCarrito.quantity + nuevoProducto.quantity }
        }else{
          return productoCarrito
        }
      })

      setCarrito(productosModificados)
    }else{
      //agregar el producto como uno nuevo
      setCarrito([ ...carrito, nuevoProducto ])
    }
  }

  const cantidadTotal = () => {
    const cantidadTotalProductos = carrito.reduce( (total, producto) => total + producto.quantity, 0 )
    return cantidadTotalProductos
  }

  const precioTotal = () => {
    const totalCompra = carrito.reduce( (total, productoCarrito) => total + ( productoCarrito.price * productoCarrito.quantity ), 0)
    return totalCompra
  }

  const vaciarCarrito = () =>{
    setCarrito([])
  }

  //funcion para detectar productos duplicados
  const estaEnElCarrito = (idProducto) => {
    const condicion = carrito.some( (productoCarrito) => productoCarrito.id === idProducto )
    return condicion
  }

  //funcion para eliminar un producto especifico
  const borrarProductoPorId = (idProducto) => {
    const productosFiltrados = carrito.filter( (productoCarrito) => productoCarrito.id !== idProducto )
    setCarrito(productosFiltrados)
  }

  return(
    <CartContext.Provider value={ { carrito, agregarProducto, cantidadTotal, vaciarCarrito, borrarProductoPorId, precioTotal } } >
      { children }
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }