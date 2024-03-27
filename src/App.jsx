import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokemones from "./Contenedores/Pokemones";
import Home from "./Contenedores/Home";
import Contacto from "./Contenedores/Contacto";
import Layout from "./Contenedores/Layout";
import Pokemon from "./Contenedores/Pokemon";
import UsarContexto from "./Contexto/UsarContexto";
import Favoritos from "./Contenedores/Favoritos";
function App() {
  return (
    <BrowserRouter>
    <UsarContexto>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/pokemones" element={<Pokemones />}></Route>
          <Route path="/pokemones/*" element={<Pokemon />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      </Layout>
      </UsarContexto>
    </BrowserRouter>
  );
}

export default App;
