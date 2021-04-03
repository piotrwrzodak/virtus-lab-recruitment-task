import { combineReducers } from 'redux';

import { FEATURE_CHARACTERS_NAME } from '../constants';

import charactersReducers from './characters/characters.reducers';

export default combineReducers({
  [FEATURE_CHARACTERS_NAME]: charactersReducers,
});
