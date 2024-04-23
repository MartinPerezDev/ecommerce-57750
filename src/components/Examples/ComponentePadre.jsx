import ComponenteHijo from "./ComponenteHijo"

const ComponentePadre = () => {
  return (
    <div>
      <ComponenteHijo>
        <h1>H1 pasado desde componente Padre</h1>
        <h2>Otro texto</h2>
      </ComponenteHijo>
    </div>
  )
}
export default ComponentePadre