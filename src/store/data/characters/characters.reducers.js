import * as charactersAT from './characters.action-types';

const initialState = {};

const charactersReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case charactersAT.SET_CHARACTERS:
      const newObject = payload.results.map((element) =>
        (({ name, gender, birth_year, mass, height, films }) => ({
          name,
          gender,
          birth_year,
          mass,
          height,
          films,
        }))(element)
      );

      return {
        ...state,
        characters: state.characters
          ? [...state.characters, ...newObject]
          : [...newObject],
        count: state.count ? state.count : 10,
        possibleLoadMore: payload.next ? true : false,
      };
    case charactersAT.LOAD_MORE_CHARACTERS:
      return {
        ...state,
        count: state.count + 5,
      };

    default:
      return state;
  }
};

export default charactersReducers;
