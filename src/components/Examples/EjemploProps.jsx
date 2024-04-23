const EjemploProps = ({ msj, image, saludar }) => {
  
  return (
    <div>
      <h2> {msj} </h2>
      <img src={image} style={{width:"100px", height:"100px"}} />
      <button onClick={saludar} >Click me!</button>
    </div>
  );
};
export default EjemploProps;
