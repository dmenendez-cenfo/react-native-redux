/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {loadPokemonsAPI} from '../services/PokemonService';

const Pokemons = ({pokemons}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemonsAPI());
  }, []);

  return (
    <View>
      <Text>POKEMON LIST</Text>
      <ScrollView>
        {pokemons.map((pokemon, index) => (
          <Text key={index}>{pokemon.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({pokemons}) => {
  return {
    pokemons: pokemons.pokemonsList,
  };
};

export default connect(mapStateToProps)(Pokemons);
