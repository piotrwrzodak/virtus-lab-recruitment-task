import * as charactersAT from './characters.action-types';

const base = 'https://swapi.dev/api/';

export const setCharacters = (value) => ({
  type: charactersAT.SET_CHARACTERS,
  payload: value,
});

export const fetchCharacters = {
  type: charactersAT.FETCH_CHARACTERS,
  endpoint: base + 'people',
  onSuccess: setCharacters,
};
