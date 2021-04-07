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
      : a.name > b.name
      ? 1
      : b.name > a.name
      ? -1
      : 0
  );

const sortAsc = (a, b) => (a.name > b.name ? 1 : -1);

export const selectCharactersStateSortedByBirthYearAsc = (state, count) => {
  let selected = selectCharactersState(state, count);
  let regex = /[0-9]+/;
  let unknownList = [];
  let knownList = [];

  selected?.map((element) =>
    element.birth_year === 'unknown'
      ? unknownList.push(element)
      : knownList.push(element)
  );

  unknownList?.sort((a, b) => sortAsc(a, b));

  knownList?.sort((a, b) =>
    parseInt(a.birth_year.match(regex)) > parseInt(b.birth_year.match(regex))
      ? 1
      : parseInt(a.birth_year.match(regex)) <
        parseInt(b.birth_year.match(regex))
      ? -1
      : a.name > b.name
      ? 1
      : b.name > a.name
      ? -1
      : 0
  );

  return knownList?.concat(unknownList);
};

export const selectCharactersStateSortedByBirthYearDesc = (state, count) => {
  let selected = selectCharactersState(state, count);
  let regex = /[0-9]+/;
  let unknownList = [];
  let knownList = [];

  selected?.map((element) =>
    element.birth_year === 'unknown'
      ? unknownList.push(element)
      : knownList.push(element)
  );

  unknownList?.sort((a, b) => sortAsc(a, b));

  knownList?.sort((a, b) => {
    if (
      parseInt(a.birth_year.match(regex)) ===
      parseInt(b.birth_year.match(regex))
    ) {
      return a.name > b.name ? 1 : -1;
    } else {
      return parseInt(a.birth_year.match(regex)) >
        parseInt(b.birth_year.match(regex))
        ? -1
        : 1;
    }
  });

  unknownList?.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  return knownList?.concat(unknownList);
};

export const selectPossibleLoadMoreCharactersState = (state) =>
  selectDataState(state)[FEATURE_CHARACTERS_NAME][POSSIBLE_LOAD_NAME];

export const selectCountState = (state) =>
  selectDataState(state)[FEATURE_CHARACTERS_NAME][COUNT_NAME];
