import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";
import axios from "axios";
function UsarContexto(props) {
  const { children } = props;

  const estadoInicial = {
    pokemones: [],
    favoritos: JSON.parse(localStorage.getItem("favoritos")) || [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const saludar = (nombre) => {
    alert("Hola " + nombre);
  };

  const traemePokemones = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    dispatch({ type: "LISTAME_POKEMONES", payload: res.data.results });
    // console.log("dispatch", traemePokemones);
  };

  const guardamePokemon = (item)=>{
    console.log("guardamepokemon")
    dispatch({ type: "GUARDAME_FAVORITOS", payload: item });
    // console.log("favoritos: ", state.favoritos)
    // console.log("favoritos:", ...state.favoritos )
  }
const eliminamePokemon = (name)=> {
dispatch({type: "BORRAME_FAVORITOS", payload:name})
}
  return (
    <Contexto.Provider value={{ saludar, guardamePokemon, traemePokemones, pokemones: state.pokemones, favoritos: state.favoritos, eliminamePokemon}}>{children}</Contexto.Provider>
  );
}

export default UsarContexto;
