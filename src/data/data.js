const products = [
  {
    id: "Axasd1231",
    name: "7 days to die",
    description: "Los jugadores tendrán que explorar un mundo posapocalíptico, saqueando edificios, vehículos y asentamientos, mientras se cubren las espaldas de los zombis y mantienen a raya la sed, el hambre o las infecciones. El juego lleva al límite a los jugadores cada siete noches, con oleadas de muertos vivientes que pondrán a prueba la destreza e ingenio con el que han construido sus defensas. 7 Days to Die puede jugarse en solitario o en multijugador, a través de cooperativo o competitivo (PVP).",
    price: 450,
    stock: 5,
    category: "survival",
    image: "/image/7-days-to-die.jpg"
  },
  {
    id: "Axasass112",
    name: "Bioshock Infinite",
    description: "Los jugadores tendrán que explorar un mundo posapocalíptico, saqueando edificios, vehículos y asentamientos, mientras se cubren las espaldas de los zombis y mantienen a raya la sed, el hambre o las infecciones. El juego lleva al límite a los jugadores cada siete noches, con oleadas de muertos vivientes que pondrán a prueba la destreza e ingenio con el que han construido sus defensas. 7 Days to Die puede jugarse en solitario o en multijugador, a través de cooperativo o competitivo (PVP).",
    price: 210,
    stock: 3,
    category: "survival",
    image: "/image/bioshock-infinite.jpg"
  },
  {
    id: "Gsx1232343",
    name: "Black 4 blood",
    description: "Back 4 Blood es un juego de disparos en primera persona desarrollado por Turtle Rock Studios y publicado por Warner Bros. Games. Fue lanzado el 12 de octubre de 2021 para PlayStation 4, PlayStation 5, Windows, Xbox One y Xbox Series X/S.",
    price: 250,
    stock: 10,
    category: "shooter",
    image: "/image/black-4-blood.jpg"
  },
  {
    id: "Sdsaw1q123",
    name: "Counter strike 2",
    description: "Counter-Strike 2 es el avance técnico más importante en la historia de Counter-Strike, el exitoso videojuego de acción-shooter en primera persona multijugador de Valve. Llegará en verano, y como una actualización 100% gratuita de CS:GO, y por el momento no hay un listado completo de novedades, pero sí se avanza cómo la frecuencia de tics (o 'tickrate') ya no afecta al moverse, disparar o lanzar; cómo los mapas son más limpios, más brillantes y mejores; y cómo las granadas de humo ahora son objetos volumétricos dinámicos que interactúan con el entorno y reaccionan a la iluminación, los disparos y las explosiones.",
    price: 190,
    stock: 2,
    category: "shooter",
    image: "/image/counter-strike-2.jpg"
  }
]

//obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //simulamos un retraso de red
    setTimeout(() => {
      resolve(products)
    }, 2000);
  });
};

export default getProducts