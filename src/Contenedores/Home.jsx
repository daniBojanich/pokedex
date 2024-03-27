import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="pantalla flexVertical flexCentrado fondogris">
      
      <Link to={"/pokemones"}>
        <img width='750px' src="https://images.wikidexcdn.net/mwuploads/wikidex/7/7c/latest/20210706140415/Primera_temporada_HA.png" alt="" /></Link>
        <br />
        <br />
        <h1 className="typoArcade">apreta en <Link to={"/pokemones"}>pokemones</Link> y empeza a coleccionarlos!</h1>
      </div>
    </>
  );
}

export default Home;
