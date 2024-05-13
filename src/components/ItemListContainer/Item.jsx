import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img
        className="image-item"
        src={product.image}
        style={{ width: "200px" }}
      />
      <div className="content-item">
        <p>{product.name}</p>
        <Link to={`/detail/${product.id}`} className="button-item"> Ver detalles </Link>
      </div>
    </div>
  );
};
export default Item;
