import { fetchCharacters } from './data/characters/characters.actions';

export function initialize() {
  return (dispatch) => {
    dispatch(fetchCharacters());
  };
}
