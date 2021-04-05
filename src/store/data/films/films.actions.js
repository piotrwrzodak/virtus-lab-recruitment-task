import * as filmsAT from './films.action-types';

const setFilms = (value) => ({
  type: filmsAT.SET_FILMS,
  payload: value,
});

export const fetchFilms = () => (dispatch) => {
  fetch('https://swapi.dev/api/films')
    .then((res) => res.json())
    .then((data) => dispatch(setFilms(data.results)));
};
