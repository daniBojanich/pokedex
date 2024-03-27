import { useContext } from "react";
import "../CSS/Contacto.css"
import Contexto from "../Contexto/Contexto";
function Contacto() {
  const {saludar, pokemones, traemePokemones} = useContext(Contexto)
  // console.log(pokemones)
  const HandleClick =()=>{
    saludar("Neko")
  }

  
  return (
    <div className="pantalla fondogris">
      <div className="flexCentrado">
      <button className="typoArcade botonSaludar" onClick={HandleClick}>SALUDAR</button></div>
      <div className="disclaimer"><h4>Para contactarte con Neko® Inc. debes seguir una serie de pasos:</h4> <br />
      <p>
      En primer lugar tenés que tener mucha suerte porque en Neko® Inc. no le contestamos a nadie, no tenemos ganas de hablar con nadie, si suena el timbre no atendemos y si nos mandan un mensaje no lo leemos porque tenemos el celular en silencio, así que te recomiendo que pruebes por discord o que mandes señales electromagnéticas. <br /><br />
      Al contactarte por favor no des muchas vueltas, andá directo al grano porque en Neko® Inc. no hay tiempo que perder.<br/> Saludos.</p></div>
      
    </div>

  );
}

export default Contacto;
