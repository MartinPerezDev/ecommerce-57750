import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css"

import getProducts from "../../data/data";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalo la promesa");
      });
  }, []);

  return (
    <div>
      <p>{saludo}</p>
      <ItemList products = {products} />
    </div>
  );
};
export default ItemListContainer;
