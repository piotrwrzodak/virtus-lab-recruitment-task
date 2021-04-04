import * as charactersAT from './characters.action-types';

const initialState = { characters: null };

const charactersReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case charactersAT.SET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };

    default:
      return state;
  }
};

export default charactersReducers;
