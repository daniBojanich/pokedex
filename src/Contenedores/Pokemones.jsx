import { useEffect, useState } from "react";
import Item from "./Item";
import "../CSS/Pokemones.css";
import Contexto from "../Contexto/Contexto";
import { useContext } from "react";

let ash = "https://upload.wikimedia.org/wikipedia/id/e/e4/Ash_Ketchum_Journeys.png";
function Pokemones() {
  const { pokemones, traemePokemones } = useContext(Contexto);

  useEffect(() => {
    traemePokemones();
    // console.log("lo que trae use effect:", pokemones);
  }, []);

  return (
    <>
      <div className="pantalla pagina-pokemones fondogris flexVertical">
        <h1 className="typoArcade titulo">POKEDEX</h1>
        <div className="pokemones">
          <div>
            <img className="ash" src={ash} alt="" />
          </div>
          <div className="listaPokemones">
            <ul className="sector">
              {pokemones.map((pokemon) => (
                <Item {...pokemon} key={pokemon.name}></Item>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemones;
