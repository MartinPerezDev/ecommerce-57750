import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css";

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
    <div className="item-list-container">
      <h2 className="title-item-list-container">{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
