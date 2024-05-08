import NavBar from "./components/NavBar/NavBar";
import ListadoTareas from "./components/Examples/RenderProps/ListadoTareas";
import ManejoDeLista from "./components/Examples/RenderProps/ManejoDeLista";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ManejoDeLista
        render={(tareas, añadirTarea, eliminarTarea) => (
          <ListadoTareas
            tareas={tareas}
            añadirTarea={añadirTarea}
            eliminarTarea={eliminarTarea}
          />
        )}
      />
    </div>
  );
}

export default App;
