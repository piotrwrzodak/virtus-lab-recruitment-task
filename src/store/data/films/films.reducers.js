import * as filmsAT from './films.action-types';

const initialState = [];

const filmsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case filmsAT.SET_FILMS:
      const newObject = payload.map((element) =>
        (({ title, url }) => ({
          title,
          url,
        }))(element)
      );
      return [...newObject];

    default:
      return state;
  }
};

export default filmsReducers;
