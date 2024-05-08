import hocManejoDeLista from "./hocManejoDeLista";
import { v4 as uuidv4 } from 'uuid';

const ListadoTareas = ({ tareas, añadirTarea, eliminarTarea }) => {

  const clickAñadirTarea = () => {
    const nuevoId = uuidv4()
    añadirTarea( { id: nuevoId, nombre: "Tarea " + nuevoId } )
  }

  return (
    <div>
      <button onClick={clickAñadirTarea}>Agregar Tarea</button>
      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <p> {tarea.nombre} </p>
          <button onClick={ () => eliminarTarea(tarea.id) }>Eliminar tarea</button>
        </div>
      ))}
    </div>
  );
};

const ListadoTareasConHoc = hocManejoDeLista(ListadoTareas);

export default ListadoTareasConHoc;
