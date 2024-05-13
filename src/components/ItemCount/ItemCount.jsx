import { useState } from "react";

import "./itemcount.css";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const agregarAlCarrito = () => {
    console.log(count);
  };

  return (
    <div className="itemcount">
      <div className="controls-itemcount">
        <button className="button-controls" onClick={restar}>-</button>
        <p>{count}</p>
        <button className="button-controls" onClick={sumar}>+</button>
      </div>
      <button className="submit-itemcount" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;
