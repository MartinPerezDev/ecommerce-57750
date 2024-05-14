import { useEffect, useState } from "react"

const EjemploContadorEventListener = () => {
  const [contador, setContador] = useState(1)

  const handleClick = () => {
    setContador( (prevContador) => prevContador + 1 )
  }

  useEffect(() => {
    const botonSumar = document.getElementById("sumar")
  
    botonSumar.addEventListener("click", handleClick)

    //cleanup effect
    return () => {
      botonSumar.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div>
      <p> Contador: {contador} </p>
      <button id="sumar">+</button>
    </div>
  )
}
export default EjemploContadorEventListener