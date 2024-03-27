import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../Contexto/Contexto";
import axios from "axios";
import { useState, useEffect } from "react";

function Item(props) {
  const { guardamePokemon, favoritos } = useContext(Contexto);
  const { name, url } = props;
  let urlCortada = url?.split("/");
  const [foto, setFoto] = useState("");

  const traemeFotito = async () => {
    const foto = await axios.get(url);
    setFoto(foto?.data.sprites?.other?.showdown.front_default);
    // console.log("la foto es: ", foto);
  };

  // console.log(url);

  useEffect(() => {
    traemeFotito();
  }, []);

  const handleGuardar = () => {
    guardamePokemon({ name: name, url: url });
    // console.log(favoritos);
  };
  return (
    <>
      <li className="typoArcade card-pokemones flexVertical">
        <Link to={"/pokemones/" + urlCortada?.[6]}>
          <div className="flexVertical divCardClick">
            <h3>{name}</h3>
            <img height="50px" src={foto} alt="" />
          </div>
        </Link>
        <button onClick={handleGuardar}>‎ ‎ ‎ ♥ ‎ ‎ ‎</button>
      </li>
    </>
  );
}

export default Item;
