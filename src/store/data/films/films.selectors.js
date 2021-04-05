import { FEATURE_FILMS_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectFilmsState = (state) =>
  selectDataState(state)[FEATURE_FILMS_NAME];
