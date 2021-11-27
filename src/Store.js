import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import PokemonReducer from './reducers/PokemonReducer';
import SubjectsReducer from './reducers/SubjectsReducer';
import thunk from 'redux-thunk';

const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = compose(applyMiddleware(...middlewares));
  const reducers = combineReducers({
    subjects: SubjectsReducer,
    pokemons: PokemonReducer,
  });
  const store = createStore(reducers, enhancers);

  return store;
};
export default configureStore;
