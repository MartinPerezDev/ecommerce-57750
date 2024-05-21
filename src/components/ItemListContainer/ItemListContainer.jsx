import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/data";
import { useParams } from "react-router-dom";

import "./itemlistcontainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

  useEffect(() => {
    //mostrar pantalla de cargando...
    setLoading(true);

    getProducts()
      .then((respuesta) => {
        if (idCategory) {
          //filtrar la data por la categoria que almacena idCategory
          const productsFilter = respuesta.filter(
            (productRes) => productRes.category === idCategory
          );
          setProducts(productsFilter);
        } else {
          //al no existir categoria guardamos todos los productos
          setProducts(respuesta);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        //ocultamos la pantalla de cargando
        setLoading(false);
      });
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2 className="title-item-list-container">
        {idCategory
          ? `Filtrado por categoria: ${idCategory}`
          : "Bienvenidos a mi ecommerce"}
      </h2>
      {loading ? <div>Cargando...</div> : <ItemList products={products} />}
    </div>
  );
};
export default ItemListContainer;
