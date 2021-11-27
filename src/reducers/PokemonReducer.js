import {
  LOAD_POKEMON,
  LOAD_POKEMON_ERROR,
  LOAD_POKEMON_SUCCESS,
} from '../actions/Pokemon/PokemonActionTypes';

const INITIAL_STATE = {
  pokemonsList: [],
  isLoadingPokemon: false,
  errorMessage: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_POKEMON:
      return {...state, isLoadingPokemon: true};
    case LOAD_POKEMON_SUCCESS:
      return {...state, pokemonsList: action.payload, isLoadingPokemon: false};
    case LOAD_POKEMON_ERROR:
      return {...state, errorMessage: action.payload, isLoadingPokemon: false};
    default:
      return state;
  }
};
