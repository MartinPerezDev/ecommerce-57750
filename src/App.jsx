import NavBar from "./components/NavBar"
import imgJoystick from "./assets/joystick.jpg";
import "./App.css";

function App() {
  const saludo = "Hola mundo, como estan";

  //estilos como objeto

  const styleh1 = {
    color: "red",
    backgroundColor: "lime",
  };

  return (
    <div>
      <NavBar />
      <h1 style={{ color: "blue", border: "1px solid purple" }}>{saludo}</h1>
      <h2 className="texto-h2">Otro texto</h2>
      <img src={imgJoystick} />
      <div>
        
      </div>
    </div>
  );
}

export default App;
