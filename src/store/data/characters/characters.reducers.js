import * as charactersAT from './characters.action-types';

const initialState = {};

const charactersReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case charactersAT.SET_CHARACTERS:
      return {
        ...state,
        characters: state.characters
          ? [...state.characters, ...payload.results]
          : [...payload.results],
        possibleLoadMore: payload.next ? true : false,
      };

    default:
      return state;
  }
};

export default charactersReducers;
