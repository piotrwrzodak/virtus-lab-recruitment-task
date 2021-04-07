import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { loadMoreCharacters } from '../store/data/characters/characters.actions';
import {
  selectCharactersState,
  selectCharactersStateSortedByNameAsc,
  selectCountState,
  selectPossibleLoadMoreCharactersState,
} from '../store/data/characters/characters.selectors';
import Character from './Character';

function Container({
  characters,
  loadMore,
  possibleLoadMore,
  count,
  charactersSortedByName,
}) {
  let [listOfCharacters, setListOfCharacters] = useState([]);
  useEffect(() => {
    setListOfCharacters(characters);
  }, [characters, count]);

  return (
    <div className="container">
      {characters && (
        <ul className="character-list">
          <div className="character character--col-names">
            <h2
              onClick={() =>
                listOfCharacters === characters
                  ? setListOfCharacters(charactersSortedByName)
                  : setListOfCharacters(characters)
              }
            >
              Name
            </h2>
            <h2>Gender</h2>
            <h2>Birth year</h2>
          </div>
          {listOfCharacters?.map((character) => {
            return <Character character={character} key={character.created} />;
          })}
        </ul>
      )}

      {characters && possibleLoadMore && (
        <button className="button button--load-more" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  characters: selectCharactersState(state, state.data.characters?.count),
  charactersSortedByName: selectCharactersStateSortedByNameAsc(
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
