import { FEATURE_CHARACTERS_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectCharactersState = (state) =>
  selectDataState(state)[FEATURE_CHARACTERS_NAME];
