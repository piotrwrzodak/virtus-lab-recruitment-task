import { fetchCharacters } from './data/characters/characters.actions';
import { fetchFilms } from './data/films/films.actions';

export function initialize() {
  return (dispatch) => {
    dispatch(fetchCharacters());
    dispatch(fetchFilms());
  };
}
