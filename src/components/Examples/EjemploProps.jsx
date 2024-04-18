const EjemploProps = ({ msj, image }) => {
  
  return (
    <div>
      <h2> {msj} </h2>
      <img src={image} style={{width:"100px", height:"100px"}} />
    </div>
  );
};
export default EjemploProps;
