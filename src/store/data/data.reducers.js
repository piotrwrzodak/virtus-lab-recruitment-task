import { combineReducers } from 'redux';

import { FEATURE_CHARACTERS_NAME, FEATURE_FILMS_NAME } from '../constants';

import charactersReducers from './characters/characters.reducers';
import filmsReducers from './films/films.reducers';

export default combineReducers({
  [FEATURE_CHARACTERS_NAME]: charactersReducers,
  [FEATURE_FILMS_NAME]: filmsReducers,
});
