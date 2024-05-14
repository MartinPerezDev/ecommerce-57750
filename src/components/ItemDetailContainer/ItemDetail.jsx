import ItemCount from "../ItemCount/ItemCount";

import "./itemDetail.css";

const ItemDetail = ({ product }) => {

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    console.log(productCart)
  }

  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={product.image} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{product.name}</p>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>
    </div>
  );
};
export default ItemDetail;
