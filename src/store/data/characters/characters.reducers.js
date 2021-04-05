import * as charactersAT from './characters.action-types';

const initialState = [];

const charactersReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case charactersAT.SET_CHARACTERS:
      return [...payload];

    default:
      return state;
  }
};

export default charactersReducers;
