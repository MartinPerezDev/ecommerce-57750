import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import Loading from "../Loading/Loading";

import "./itemlistcontainer.css";
import Banner from "../Banner/Banner.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

  const getProducts = () => {
    setLoading(true)
    const productsRef = collection(db, "products")
    getDocs(productsRef)
      .then((productsDb)=> {

        //formateamos correctamente la data recibida de la db
        const data = productsDb.docs.map( (product)=> {
          return { id: product.id, ...product.data() }
        })

        setProducts(data)
      })
      .finally(()=> setLoading(false))
  }

  const getProductsByCategory = () => {
    setLoading(true)

    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", idCategory) )
    getDocs(q)
      .then((productsDb)=> {

        //formateamos correctamente la data recibida de la db
        const data = productsDb.docs.map( (product)=> {
          return { id: product.id, ...product.data() }
        })

        setProducts(data)
      })
      .finally(()=> setLoading(false))
  }

  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <Banner />
      <h2 className="title-item-list-container">
        {idCategory ? `Filtrado por categoria: ${idCategory}` : "Bienvenidos a mi ecommerce"}
      </h2>
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};
export default ItemListContainer;
