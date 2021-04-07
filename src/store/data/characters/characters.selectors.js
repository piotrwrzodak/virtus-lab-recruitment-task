import {
  COUNT_NAME,
  FEATURE_CHARACTERS_NAME,
  POSSIBLE_LOAD_NAME,
} from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectCharactersState = (state, count) =>
  selectDataState(state)[FEATURE_CHARACTERS_NAME][
    FEATURE_CHARACTERS_NAME
  ]?.slice(0, count);

export const selectCharactersStateSortedByNameAsc = (state, count) =>
  selectCharactersState(state, count)?.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

export const selectCharactersStateSortedByNameDesc = (state, count) =>
  selectCharactersState(state, count)?.sort((a, b) =>
    a.name < b.name ? 1 : b.name < a.name ? -1 : 0
  );

export const selectCharactersStateSortedByGenderAsc = (state, count) =>
  selectCharactersState(state, count)?.sort((a, b) =>
    a.gender > b.gender
      ? 1
      : b.gender > a.gender
      ? -1
      : a.name > b.name
      ? 1
      : b.name > a.name
      ? -1
      : 0
  );

export const selectCharactersStateSortedByGenderDesc = (state, count) =>
  selectCharactersState(state, count)?.sort((a, b) =>
    a.gender < b.gender
      ? 1
      : b.gender < a.gender
      ? -1
      : a.name < b.name
      ? 1
      : b.name < a.name
      ? -1
      : 0
  );

export const selectCharactersStateSortedByBirthYearAsc = (state, count) =>
  selectCharactersState(state, count)?.sort((a, b) =>
    a.birth_year > b.birth_year
      ? 1
      : b.birth_year > a.birth_year
      ? -1
      : a.name > b.name
      ? 1
      : b.name > a.name
      ? -1
      : 0
  );

export const selectCharactersStateSortedByBirthYearDesc = (state, count) =>
  selectCharactersState(state, count)?.sort((a, b) =>
    a.birth_year < b.birth_year
      ? 1
      : b.birth_year < a.birth_year
      ? -1
      : a.name < b.name
      ? 1
      : b.name < a.name
      ? -1
      : 0
  );

export const selectPossibleLoadMoreCharactersState = (state) =>
  selectDataState(state)[FEATURE_CHARACTERS_NAME][POSSIBLE_LOAD_NAME];

export const selectCountState = (state) =>
  selectDataState(state)[FEATURE_CHARACTERS_NAME][COUNT_NAME];
