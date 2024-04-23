import { useState, useEffect } from "react"
import Contador from "./Contador"

const EjemploContador = () => {
  const [ contador, setContador ] = useState(0)
  const [ switchButton, setSwitchButton ] = useState(true)

  const aumentar = () => {
    setContador( contador + 1 )
  }

  const cambiarToggle = () => {
    setSwitchButton( !switchButton )
  }

  //se ejecuta al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect( () => {
    console.log("1er useEffect")
  }, [] )

  //se ejecuta en el montaje y cada vez que contador se actualice
  //ej: para realizar acciones especificas cuando una variable cambie
  useEffect( ()=> {
    console.log("2do useEffect")
  }, [contador] )

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del componente
  useEffect( () => {
    console.log("3er useEffect")
  })


  return (
    <div>
      <Contador contador={contador} aumentar={aumentar} />
      <p> Valor del toggle: { switchButton.toString() } </p>
      <button onClick={cambiarToggle}>Cambiar valor toggle</button>
    </div>
  )
}
export default EjemploContador