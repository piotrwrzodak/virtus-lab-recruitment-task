import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { selectCharactersState } from '../store/data/characters/characters.selectors';
import Character from './Character';

function Container(props) {
  const { characters } = props;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  return (
    <div className="container">
      {characters && (
        <ul className="character-list">
          {characters?.map((character) => {
            return (
              <Character
                character={character}
                films={films}
                key={character.created}
              />
            );
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
