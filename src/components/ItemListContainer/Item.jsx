import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link className="item" to={`/detail/${product.id}`}>
      <img className="image-item" src={product.image}/>
    </Link>
  );
};
export default Item;
