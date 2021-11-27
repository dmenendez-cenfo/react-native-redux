import axios from 'axios';
import {
  loadPokemon,
  loadPokemonError,
  loadPokemonSuccess,
} from '../actions/Pokemon/PokemonActions';

export const loadPokemonsAPI = () => dispatch => {
  dispatch(loadPokemon());

  axios
    .get('https://pokeapi.co//api/v2/pokemon?limit=151')
    .then(response => dispatch(loadPokemonSuccess(response.data.results)))
    .catch(error => dispatch(loadPokemonError(error)));
};
