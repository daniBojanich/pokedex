import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Contexto from "../Contexto/Contexto";
function Favorito(props) {
  const {eliminamePokemon} = useContext(Contexto);
  const [foto, setFoto] = useState("");

  const traemeFotito = async () => {
    const foto = await axios.get(url);
    setFoto(foto?.data.sprites?.other?.showdown.front_default);
    // console.log("la foto es: ", foto);
  };
  const { name, url } = props;

  // console.log(url)

  const handleBorrar =()=>{
    alert ('Eliminado de tus favoritos')
    eliminamePokemon({name:name})
  }

  useEffect(() => {
    traemeFotito();
  }, []);
  return ( <>
  <div className="TarjetaFavoritos typoArcade">
  <li>{name}</li>
  <img src={foto} alt="" />
  <button onClick={handleBorrar} className="typoArcade">borrar</button>
  </div></> );
}

export default Favorito;