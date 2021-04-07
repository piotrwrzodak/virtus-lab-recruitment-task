import * as loadingAT from './loading.action-types';

const initialState = false;

const loadingReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case loadingAT.LOADING_START:
      return payload;
    case loadingAT.LOADING_END:
      return payload;
    default:
      return state;
  }
};

export default loadingReducers;
