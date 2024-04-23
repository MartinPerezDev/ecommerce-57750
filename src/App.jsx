import EjemploContador from "./components/Examples/EjemploContador";
import ItemCount from "./components/ItemCount/ItemCount";
import "./App.css";

function App() {

  return (
    <div>
      <ItemCount stock={10} />
    </div>
  );
}

export default App;
