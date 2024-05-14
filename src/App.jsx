import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EjemploFormulario from "./components/Examples/EjemploFormulario";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer saludo="Bienvenidos!!" /> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Bienvenidos!!" /> } />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/ejemplos" element={<EjemploFormulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
