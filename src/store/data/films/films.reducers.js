import * as filmsAT from './films.action-types';

const initialState = [];

const filmsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case filmsAT.SET_FILMS:
      return [...payload];

    default:
      return state;
  }
};

export default filmsReducers;
