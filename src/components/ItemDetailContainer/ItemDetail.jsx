import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={product.image} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{product.name}</p>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
      </div>
    </div>
  );
};
export default ItemDetail;
