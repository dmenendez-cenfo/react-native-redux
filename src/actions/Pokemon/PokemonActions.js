import {
  LOAD_POKEMON,
  LOAD_POKEMON_ERROR,
  LOAD_POKEMON_SUCCESS,
} from './PokemonActionTypes';

export const loadPokemon = () => ({
  type: LOAD_POKEMON,
});

export const loadPokemonSuccess = pokemons => ({
  type: LOAD_POKEMON_SUCCESS,
  payload: pokemons,
});

export const loadPokemonError = errorMessage => ({
  type: LOAD_POKEMON_ERROR,
  payload: errorMessage,
});
