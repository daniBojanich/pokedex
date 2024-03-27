import { Link } from "react-router-dom";
import "../CSS/Header.css";
function Header() {
  return (
    <>
      <div className="header typoArcade flexCentrado">
        <Link to={"/"}>Home</Link>
        <Link to={"/pokemones"}>Pokemones</Link>
        <Link to={"/favoritos"}>Favoritos</Link>
        <Link to={"/contacto"}>Contacto</Link>

      </div>
    </>
  );
}

export default Header;
