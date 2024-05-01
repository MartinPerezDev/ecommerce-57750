const getProducts = () => {
  return fetch("http://localhost:8080/api/productos")
    .then((respuesta) => {
      return respuesta.json()
    })
}

const getProductById = (idProduct) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`)
    .then((respuesta) => {
      return respuesta.json()
    })
}

const addProduct = (newProduct) => {
  return fetch("http://localhost:8080/api/productos", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
    .then((respuesta) => {
      return respuesta.json()
    })
}

const modProduct = (idProduct, mod) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(mod)
  })
    .then((respuesta) => {
      return respuesta.json()
    })
}

const deleteProductById = (idProduct) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
    method: "DELETE"
  })
    .then((respuesta) => {
      return respuesta.json()
    })
}


export { getProducts, getProductById, addProduct, modProduct, deleteProductById }