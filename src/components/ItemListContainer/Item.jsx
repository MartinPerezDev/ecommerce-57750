const Item = ({ product }) => {

  return (
    <div className="item">
      <img className="image-item" src={product.imagen} style={{ width: "200px" }} />
      <p>{product.nombre}</p>
    </div>
  );
};
export default Item;
