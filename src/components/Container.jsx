import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadMoreCharacters } from '../store/data/characters/characters.actions';
import {
  selectCharactersState,
  selectPossibleLoadMoreCharactersState,
} from '../store/data/characters/characters.selectors';
import Character from './Character';

function Container({ characters, loadMore, possibleLoadMore }) {
  useEffect(() => {}, [characters]);

  return (
    <div className="container">
      {characters && (
        <ul className="character-list">
          {characters.map((character) => {
            return <Character character={character} key={character.created} />;
          })}
        </ul>
      )}
      {possibleLoadMore && (
        <button className="button button--load-more" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  characters: selectCharactersState(state),
  possibleLoadMore: selectPossibleLoadMoreCharactersState(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMore: () => dispatch(loadMoreCharacters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
