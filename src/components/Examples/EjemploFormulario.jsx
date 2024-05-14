import { useState } from "react"

const EjemploFormulario = () => {
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")

  const cambiarNombre = (event) => {
    setNombre(event.target.value)
  }

  const cambiarDireccion = (event) => {
    setDireccion(event.target.value)
  }

  const enviarFormulario = (event) => {
    event.preventDefault()
    const usuario = { nombre, direccion }
    console.log(usuario)
  }

  return (
    <form onSubmit={enviarFormulario} >
      <label htmlFor="">Nombre: </label>
      <input type="text" value={nombre} onChange={cambiarNombre} />

      <label>Direccion</label>
      <input type="text" value={direccion} onChange={cambiarDireccion} />

      <button type="submit">Enviar</button>
    </form>
  )
}
export default EjemploFormulario