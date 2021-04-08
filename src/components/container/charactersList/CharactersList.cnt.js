import { connect } from 'react-redux';

import {
  selectCharactersState,
  selectCharactersStateSortedByNameAsc,
  selectCharactersStateSortedByNameDesc,
  selectCharactersStateSortedByGenderAsc,
  selectCharactersStateSortedByGenderDesc,
  selectCharactersStateSortedByBirthYearAsc,
  selectCharactersStateSortedByBirthYearDesc,
  selectCountState,
} from '../../../store/data/characters/characters.selectors';
import { selectLoadingState } from '../../../store/data/loading/loading.selectors';

import CharactersList from './CharactersList.cmp';

const mapStateToProps = (state) => ({
  count: selectCountState(state),
  initialCharacters: selectCharactersState(state, state.data.characters.count),
  charactersSortedByNameAsc: selectCharactersStateSortedByNameAsc(
    state,
    state.data.characters.count
  ),
  charactersSortedByNameDesc: selectCharactersStateSortedByNameDesc(
    state,
    state.data.characters.count
  ),
  charactersSortedByGenderAsc: selectCharactersStateSortedByGenderAsc(
    state,
    state.data.characters.count
  ),
  charactersSortedByGenderDesc: selectCharactersStateSortedByGenderDesc(
    state,
    state.data.characters.count
  ),
  charactersSortedByBirthYearAsc: selectCharactersStateSortedByBirthYearAsc(
    state,
    state.data.characters.count
  ),
  charactersSortedByBirthYearDesc: selectCharactersStateSortedByBirthYearDesc(
    state,
    state.data.characters.count
  ),
  loading: selectLoadingState(state),
});

export default connect(mapStateToProps, null)(CharactersList);
