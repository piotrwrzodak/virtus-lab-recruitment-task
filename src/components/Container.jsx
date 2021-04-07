import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { loadMoreCharacters } from '../store/data/characters/characters.actions';
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
} from '../store/data/characters/characters.selectors';
import Character from './Character';

function Container({
  initialCharacters,
  loadMore,
  possibleLoadMore,
  count,
  charactersSortedByNameAsc,
  charactersSortedByNameDesc,
  charactersSortedByGenderAsc,
  charactersSortedByGenderDesc,
  charactersSortedByBirthYearAsc,
  charactersSortedByBirthYearDesc,
}) {
  let [currentListOfCharacters, setCurrentListOfCharacters] = useState([]);
  useEffect(() => {
    setCurrentListOfCharacters(initialCharacters);
  }, [initialCharacters, count]);

  const handleNameClick = () => {
    switch (currentListOfCharacters) {
      case initialCharacters: {
        setCurrentListOfCharacters(charactersSortedByNameAsc);
        break;
      }
      case charactersSortedByNameAsc: {
        setCurrentListOfCharacters(charactersSortedByNameDesc);
        break;
      }
      case charactersSortedByNameDesc: {
        setCurrentListOfCharacters(charactersSortedByNameAsc);
        break;
      }
      default:
        setCurrentListOfCharacters(charactersSortedByNameAsc);
        break;
    }
  };

  const handleGenderClick = () => {
    switch (currentListOfCharacters) {
      case initialCharacters: {
        setCurrentListOfCharacters(charactersSortedByGenderAsc);
        break;
      }
      case charactersSortedByGenderAsc: {
        setCurrentListOfCharacters(charactersSortedByGenderDesc);
        break;
      }
      case charactersSortedByGenderDesc: {
        setCurrentListOfCharacters(charactersSortedByGenderAsc);
        break;
      }
      default:
        setCurrentListOfCharacters(charactersSortedByGenderAsc);
        break;
    }
  };

  const handleBirthYearClick = () => {
    switch (currentListOfCharacters) {
      case initialCharacters: {
        setCurrentListOfCharacters(charactersSortedByBirthYearAsc);
        break;
      }
      case charactersSortedByBirthYearAsc: {
        setCurrentListOfCharacters(charactersSortedByBirthYearDesc);
        break;
      }
      case charactersSortedByBirthYearDesc: {
        setCurrentListOfCharacters(charactersSortedByBirthYearAsc);
        break;
      }
      default:
        setCurrentListOfCharacters(charactersSortedByBirthYearAsc);
        break;
    }
  };

  return (
    <div className="container">
      {currentListOfCharacters && (
        <ul className="character-list">
          <div className="character character--col-names">
            <h2 onClick={() => handleNameClick()}>Name</h2>
            <h2 onClick={() => handleGenderClick()}>Gender</h2>
            <h2 onClick={() => handleBirthYearClick()}>Birth year</h2>
          </div>
          {currentListOfCharacters?.map((character) => {
            return <Character character={character} key={character.created} />;
          })}
        </ul>
      )}

      {currentListOfCharacters && possibleLoadMore && (
        <button className="button button--load-more" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

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
