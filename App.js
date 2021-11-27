import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import AllSubjects from './src/components/AllSubjects';
import Pokemons from './src/components/Pokemons';
import SelectedSubjects from './src/components/SelectedSubjects';
import configureStore from './src/Store';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <View>
        <Text>Subjects App</Text>
        <AllSubjects />
        <SelectedSubjects />
        <Pokemons />
      </View>
    </Provider>
  );
};

export default App;
