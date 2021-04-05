import { FEATURE_CHARACTERS_NAME, POSSIBLE_LOAD_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectCharactersState = (state) =>
  selectDataState(state)[FEATURE_CHARACTERS_NAME][FEATURE_CHARACTERS_NAME];

export const selectPossibleLoadMoreCharactersState = (state) =>
  selectDataState(state)[FEATURE_CHARACTERS_NAME][POSSIBLE_LOAD_NAME];
