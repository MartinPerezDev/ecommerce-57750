import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img className="image-item" src={product.image} style={{ width: "200px" }} />
      <p>{product.name}</p>
      <Link to={`/detail/${product.id}`} > Ver detalles </Link>
    </div>
  );
};
export default Item;
