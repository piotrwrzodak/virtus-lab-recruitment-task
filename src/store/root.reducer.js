import { combineReducers } from 'redux';
import { FEATURE_DATA_NAME } from './constants';

export default combineReducers({
  [FEATURE_DATA_NAME]: dataReducers,
});
