import React, { useEffect, useState } from 'react';
import Character from './Character';

function Container() {
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .then((data) => console.log(data));

    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setFilms(data.results))
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <ul className="character-list">
        {characters.map((character) => {
          return (
            <Character
              character={character}
              films={films}
              key={character.created}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Container;
