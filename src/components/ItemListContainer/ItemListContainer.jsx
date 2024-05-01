import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css";
import { getProducts, getProductById, addProduct, modProduct, deleteProductById } from "../../utils/fetchApi.js"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  const newProduct = {
    nombre: "Black 4 blood",
    descripcion: "descripcion 3",
    precio: 250,
    stock: 1,
    categoria: "shooter",
    imagen: "/image/black-4-blood.jpg"
  }

  const mod = {
    nombre : "Need for speed",
    precio: 1200,
    categoria: "racing"
  }

  useEffect(() => {
    getProducts()
      .then( (data) => setProducts(data) )
    /*
    getProductById(3)
      .then((data) => setProducts([data]) )
    */
  }, []);

  const handleClick = () => {
    addProduct(newProduct)
      .then((data) => setProducts(data) )
  }

  return (
    <div className="item-list-container">
      <h2 className="title-item-list-container">{saludo}</h2>
      <button onClick={ handleClick } >Añadir nuevo producto</button>
      <button onClick={ () => modProduct(3, mod) }>Modificar producto 3</button>
      <button onClick={ () => deleteProductById(1) } >Eliminar producto 1</button>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
