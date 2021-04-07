import * as charactersAT from './characters.action-types';
import { startLoading, endLoading } from '../loading/loading.actions';

const setCharacters = (value) => ({
  type: charactersAT.SET_CHARACTERS,
  payload: value,
});

export const fetchCharacters = () => (dispatch) => {
  dispatch(startLoading());
  fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCharacters(data));
      dispatch(endLoading());
    });
};

const loadMore = () => ({
  type: charactersAT.LOAD_MORE_CHARACTERS,
});

export const loadMoreCharacters = () => (dispatch, getState) => {
  dispatch(startLoading());
  const state = getState();
  if (state.data.characters.count % 10 === 0) {
    const page = state.data.characters.characters.length / 10 + 1;
    if (state.data.characters.possibleLoadMore) {
      fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCharacters(data));
        });
    }
    dispatch(loadMore());
    dispatch(endLoading());
  } else {
    dispatch(loadMore());
    dispatch(endLoading());
  }
};
