import * as charactersAT from './characters.action-types';

const setCharacters = (value) => ({
  type: charactersAT.SET_CHARACTERS,
  payload: value,
});

export const fetchCharacters = () => (dispatch) => {
  fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then((data) => dispatch(setCharacters(data.results)));
};
