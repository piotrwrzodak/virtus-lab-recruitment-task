import { FEATURE_LOADING_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectLoadingState = (state) =>
  selectDataState(state)[FEATURE_LOADING_NAME];
