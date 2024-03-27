import Favorito from "./Favorito2";
import Contexto from "../Contexto/Contexto";
import { useContext } from "react";
function Favoritos() {
  const { favoritos } = useContext(Contexto);
  console.log(favoritos);

  return (
    <>
      <div className="pantalla flexVertical fondogris">
        <h2 className="titulo typoArcade">FAVORITOS</h2>
        <div className="listaPokemones pokemones">
          <ul className="sector">
            {favoritos.map((favorito, i) => (
              <Favorito {...favorito} key={i}></Favorito>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Favoritos;
