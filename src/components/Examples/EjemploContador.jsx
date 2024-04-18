import { useState } from "react"
import Contador from "./Contador"

const EjemploContador = () => {
  //hook de estado: useState o variable de estado
  const [ contador, setContador ] = useState(0)

  //let contador = 0

  const aumentar = () => {
    setContador( contador + 1 )
  }

  return (
    <div>
      <Contador contador={contador} aumentar={aumentar} />
    </div>
  )
}
export default EjemploContador