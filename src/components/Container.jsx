import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCharactersState } from '../store/data/characters/characters.selectors';
import Character from './Character';

function Container({ characters }) {
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  characters: selectCharactersState(state),
});

export default connect(mapStateToProps, null)(Container);
