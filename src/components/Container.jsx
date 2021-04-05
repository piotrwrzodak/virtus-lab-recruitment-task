import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { loadMoreCharacters } from '../store/data/characters/characters.actions';
import {
  selectCharactersState,
  selectPossibleLoadMoreCharactersState,
} from '../store/data/characters/characters.selectors';
import Character from './Character';

function Container({ characters, loadMore, possibleLoadMore }) {
  const [charactersDisplayed, setCharactersDisplayed] = useState(10);
  useEffect(() => {}, [characters]);

  const handleClick = () => {
    if (charactersDisplayed % 10 === 0) {
      loadMore();
      setCharactersDisplayed(charactersDisplayed + 5);
    } else {
      setCharactersDisplayed(charactersDisplayed + 5);
    }
  };

  return (
    <div className="container">
      {characters && (
        <ul className="character-list">
          {characters.map((character, index) => {
            if (index < charactersDisplayed)
              return (
                <Character character={character} key={character.created} />
              );
          })}
        </ul>
      )}
      {possibleLoadMore && (
        <button className="button button--load-more" onClick={handleClick}>
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
