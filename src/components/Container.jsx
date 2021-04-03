import React, { useEffect, useState } from 'react';

function Container() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <ul className="character-list">
        {characters?.map((character) => {
          return (
            <li className="character-list__item" key={character.created}>
              <h1>{character.name}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Container;
