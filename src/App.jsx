import EjemploProps from "./components/Examples/EjemploProps"
import EjemploContador from "./components/Examples/EjemploContador";
import "./App.css";

function App() {

  return (
    <div>
      <h1>Hola Mundo!</h1>
      <h2>Como estan??</h2>

      <EjemploContador />

      <EjemploProps msj="Prop enviada desde el componente App" image="https://th.bing.com/th/id/R.40252aa897d6c78e0ad2affd40b39c4a?rik=gm3AYOmqhi7wOA&riu=http%3a%2f%2fcdn1.gamepur.com%2fimages%2ffeature%2fThrustmaster-T-Flight.jpg&ehk=2xLr2jA3CX6v7mCRIq8oy7zSX3r5DI%2fEgq3WtBttdUc%3d&risl=&pid=ImgRaw&r=0" />
      <EjemploProps msj="Este es otro mensaje" image="https://th.bing.com/th/id/OIP.HY3I2vLel8eRqzkO2wYE5gHaHa?rs=1&pid=ImgDetMain" />
    </div>
  );
}

export default App;
