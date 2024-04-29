const Item = ({ product }) => {
  return (
    <div className="item">
      <img className="image-item" src={product.image} style={{ width: "200px" }} />
      <p>{product.name}</p>
    </div>
  );
};
export default Item;
