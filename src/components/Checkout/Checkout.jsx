import { useState } from "react";
import Formulario from "./Formulario";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    //le damos formato a los datos que vamos a subir
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    generateOrder(orden);
  };

  //subimos nuestra orden a firebase
  const generateOrder = (orden) => {
    const ordenesRef = collection(db, "orders");
    addDoc(ordenesRef, orden)
      .then((respuesta) => setIdOrden(respuesta.id))
      .catch((error)=> console.log(error))
      .finally(()=> {
        //reducir el stock
        updateStock()
        //luego de que se subio la orden, vaciamos el carrito
        vaciarCarrito()
      })
  };

  //no es requerido en el proyecto final
  const updateStock = () => {
    carrito.map((productoCarrito)=> {
      //guardamos la cantidad para luego restarla en el stock
      let quantity = productoCarrito.quantity
      //borramos el campo quantity
      delete productoCarrito.quantity

      const productoRef = doc(db, "products", productoCarrito.id)
      setDoc(productoRef, { ...productoCarrito, stock: productoCarrito.stock - quantity })
        .then(()=> console.log("stock actualizado correctamente"))
        .catch((error)=> console.log(error))
    })
  }

  return (
    <div>
      {idOrden ? (
        <div>
          <h2>Orden generada con exito!🤩</h2>
          <p> guarde el id de su orden: {idOrden} </p>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};
export default Checkout;
