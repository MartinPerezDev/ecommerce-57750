const products = [
  {
    id: "Axasd1231",
    name: "7 days to die",
    description: "Description 1",
    price: 450,
    stock: 5,
    category: "survival",
    image: "/image/7-days-to-die.jpg"
  },
  {
    id: "Axasass112",
    name: "Bioshock Infinite",
    description: "Description 2",
    price: 210,
    stock: 1,
    category: "survival",
    image: "/image/bioshock-infinite.jpg"
  },
  {
    id: "Gsx1232343",
    name: "Black 4 blood",
    description: "Description 2",
    price: 250,
    stock: 1,
    category: "shooter",
    image: "/image/black-4-blood.jpg"
  },
  {
    id: "Sdsaw1q123",
    name: "Counter strike 2",
    description: "Description 2",
    price: 190,
    stock: 1,
    category: "shooter",
    image: "/image/counter-strike-2.jpg"
  },
  {
    id: "Axasd12",
    name: "7 days to die",
    description: "Description 1",
    price: 450,
    stock: 5,
    category: "survival",
    image: "/image/7-days-to-die.jpg"
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