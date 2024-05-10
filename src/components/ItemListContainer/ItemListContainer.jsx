import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/data";
import { useParams } from "react-router-dom";

import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if(idCategory){
          //filtrar la data por la categoria que almacena idCategory
          const productsFilter = respuesta.filter( (productRes)=> productRes.category === idCategory )
          setProducts(productsFilter)
        }else{
          //al no existir categoria guardamos todos los productos
          setProducts(respuesta);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalo la promesa");
      });
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2 className="title-item-list-container">{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
