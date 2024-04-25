const products = [
  {
    id: "Axasd1231" ,
    name: "Producto 1",
    description: "Description 1",
    price: 1200,
    stock: 5,
    category: "survival",
    image: "/image/resident.jpg"
  },
  {
    id: "Axasass112" ,
    name: "Producto 2",
    description: "Description 2",
    price: 122,
    stock: 1,
    category: "survival",
    image: "/image/resident.jpg"
  }
]

//obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //simulamos un retraso de red
    setTimeout(() => {
      resolve(products)
    }, 3000);
  });
};

export default getProducts