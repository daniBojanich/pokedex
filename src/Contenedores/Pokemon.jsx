import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../CSS/Pokemon.css";
import reflejos from "../assets/reflejos.png";
import { useContext } from "react";
import Contexto from "../Contexto/Contexto";

function Pokemon() {
  const { guardamePokemon, favoritos, pokemones } = useContext(Contexto);

  const location = useLocation();
  const pedazos = location.pathname.split("/");
  const url = "https://pokeapi.co/api/v2/pokemon/" + pedazos[2] + "/";
  const url2 = "https://pokeapi.co/api/v2/pokemon-species/" + pedazos[2] + "/";


  const [pokemon, setPokemon] = useState([]);
  const [descripcion, setDescripcion] = useState([]);
  const [color, setColor] = useState("");

  const traemeColor = async () => {
    const col = await axios.get(url2);
    setColor(col?.data?.color?.name);
    console.log("el color del pokemon es: ", color);
  };

  const traemeDescripcion = async () => {
    const des = await axios.get(url2);
    // setDescripcion(des.data);
    setDescripcion(des.data.flavor_text_entries);
    // console.log("descripción", des.data.flavor_text_entries);
  };
  const flavorTextsInSpanish = descripcion?.filter((entry) => entry.language.name === "es");
  // console.log("texto en español", flavorTextsInSpanish);
  const randomFlavorText = flavorTextsInSpanish[Math.floor(Math.random() * flavorTextsInSpanish.length)];
  const randomIndex = Math.floor(Math.random() * flavorTextsInSpanish.length);

  const traemePokemon = async () => {
    const res = await axios.get(url);
    setPokemon(res.data);
  };
const name = pokemon?.name
  useEffect(() => {
    traemePokemon();
    traemeDescripcion();
    traemeColor();
  }, []);
  const handleGuardar = () => {
    guardamePokemon({ name: name, url: url });
    console.log(favoritos);
  };
  return (
    <>
      <div className="pantalla paginaPokemon fondoAzul">
        <div className="ItemPokemon BordesPixelados">
          {" "}
          <div className="reflejos">
            <img src={reflejos} alt="" />
          </div>
          <h2 className="typoArcade">{pokemon?.name?.toUpperCase()}</h2>
          {/* <img src={pokemon?.sprites?.other?.dream_world.front_default} width="200px" alt={pokemon?.name} className="pixelated"/> */}
          <img src={pokemon?.sprites?.other?.showdown.front_default} height="150px" alt={pokemon?.name} />
          <div className="type">
            <h3 className="typoArcade">
              Type: {pokemon?.types?.[0]?.type.name} y {pokemon?.types?.[1]?.type.name}
            </h3>
            {/* la descripcion esta en flavored_text en: https://pokeapi.co/api/v2/pokemon-species/1/
      buscar como filtrar por idioma "es" */}
          </div>
          <button className="botonFavorito" onClick={handleGuardar}>
            ‎ ‎ ‎ ♥ ‎ ‎ ‎
          </button>
          <div style={{ color: color }}> soy de color {color}</div>
          {/* {flavorTextsInSpanish.map((frase, i) => (
<h4 key={i}>{frase.flavor_text}</h4>
))} */}
        </div>
        <h4 className="typoArcade textoDesc" key={randomIndex}>
          {flavorTextsInSpanish?.[randomIndex]?.flavor_text}
        </h4>
      </div>
    </>
  );
}

export default Pokemon;
