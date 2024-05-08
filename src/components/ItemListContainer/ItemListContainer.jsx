import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading";
import "./itemlistcontainer.css";

import getProducts from "../../data/data";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { loading, showLoading, hiddenLoading, loadingScreen } = useLoading();

  useEffect(() => {
    showLoading()

    getProducts()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        hiddenLoading()
      });
  }, []);

  return (
    <div className="item-list-container">
      <h2 className="title-item-list-container">{saludo}</h2>
      {loading ? loadingScreen : <ItemList products={products} />}
    </div>
  );
};
export default ItemListContainer;
