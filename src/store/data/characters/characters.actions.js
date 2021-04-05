import * as charactersAT from './characters.action-types';

const setCharacters = (value) => ({
  type: charactersAT.SET_CHARACTERS,
  payload: value,
});

export const fetchCharacters = () => (dispatch) => {
  fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(setCharacters(data));
    });
};

export const loadMoreCharacters = () => (dispatch, getState) => {
  const state = getState();
  const page = state.data.characters.characters.length / 10 + 1;
  if (state.data.characters.possibleLoadMore) {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setCharacters(data));
      });
  }
};
