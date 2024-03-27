//TYPES
const LISTAME_POKEMONES = "LISTAME_POKEMONES";
// const DAME_POKEMON = "DAME_POKEMON";
const GUARDAME_FAVORITOS = "GUARDAME_FAVORITOS";
const BORRAME_FAVORITOS = "BORRAME_FAVORITOS";
// const DAME_DESCRIPCION = "DAME_DESCRIPCION";
// notas:
// payload es la info nueva, el pokemon nuevo, el favorito nuevo, etc

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_POKEMONES:
      return { ...state, pokemones: payload };
    case GUARDAME_FAVORITOS:
      const guardamePokemon = [...state.favoritos, payload];
      localStorage.setItem("favoritos", JSON.stringify(guardamePokemon));
      return { ...state, favoritos: guardamePokemon };
    case BORRAME_FAVORITOS:
      const borrarFavorito = state.favoritos.filter((pokemon) => pokemon.name !== payload.name);
      localStorage.setItem("favoritos", JSON.stringify(borrarFavorito));
      return { ...state, favoritos: borrarFavorito };
  }
}
