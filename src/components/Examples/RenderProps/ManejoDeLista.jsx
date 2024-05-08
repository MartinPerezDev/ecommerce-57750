import { useState } from "react"

const ManejoDeLista = ({ render }) => {

  const [tareas, setTareas] = useState([])

    const añadirTarea = (nuevaTarea) =>{
      setTareas( [ ...tareas, nuevaTarea ] )
    }

    const eliminarTarea = (idTarea) => {
      const tareasFiltradas = tareas.filter( (tarea) => tarea.id !== idTarea )
      setTareas(tareasFiltradas)
    }

  return render(tareas, añadirTarea, eliminarTarea)
}
export default ManejoDeLista