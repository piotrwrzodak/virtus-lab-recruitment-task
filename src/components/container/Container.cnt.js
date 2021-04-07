import { connect } from 'react-redux';

import { loadMoreCharacters } from '../../store/data/characters/characters.actions';
import {
  selectCharactersState,
  selectCharactersStateSortedByNameAsc,
  selectCharactersStateSortedByNameDesc,
  selectCharactersStateSortedByGenderAsc,
  selectCharactersStateSortedByGenderDesc,
  selectCharactersStateSortedByBirthYearAsc,
  selectCharactersStateSortedByBirthYearDesc,
  selectCountState,
  selectPossibleLoadMoreCharactersState,
} from '../../store/data/characters/characters.selectors';

import Container from './Container.cmp';

const mapStateToProps = (state) => ({
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
  possibleLoadMore: selectPossibleLoadMoreCharactersState(state),
  count: selectCountState(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMore: () => dispatch(loadMoreCharacters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
