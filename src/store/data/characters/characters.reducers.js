import * as charactersAT from './characters.action-types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case charactersAT.SET_CHARACTERS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
