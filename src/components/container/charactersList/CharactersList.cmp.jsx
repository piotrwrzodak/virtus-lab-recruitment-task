import React from 'react';
import Character from './character/';

function CharactersList({
  charactersSortedByNameAsc,
  charactersSortedByNameDesc,
  charactersSortedByGenderAsc,
  charactersSortedByGenderDesc,
  charactersSortedByBirthYearAsc,
  charactersSortedByBirthYearDesc,
  searchInput,
  currentListOfCharacters,
  setCurrentListOfCharacters,
  filmInput,
}) {
  const handleNameClick = () => {
    if (currentListOfCharacters === charactersSortedByNameAsc) {
      setCurrentListOfCharacters(charactersSortedByNameDesc);
    } else {
      setCurrentListOfCharacters(charactersSortedByNameAsc);
    }
  };

  const handleGenderClick = () => {
    if (currentListOfCharacters === charactersSortedByGenderAsc) {
      setCurrentListOfCharacters(charactersSortedByGenderDesc);
    } else {
      setCurrentListOfCharacters(charactersSortedByGenderAsc);
    }
  };

  const handleBirthYearClick = () => {
    if (currentListOfCharacters === charactersSortedByBirthYearAsc) {
      setCurrentListOfCharacters(charactersSortedByBirthYearDesc);
    } else {
      setCurrentListOfCharacters(charactersSortedByBirthYearAsc);
    }
  };
  return (
    <ul className="character-list">
      <div className="character character--col-names">
        <h2 onClick={handleNameClick}>Name</h2>
        <h2 onClick={handleGenderClick}>Gender</h2>
        <h2 onClick={handleBirthYearClick}>Birth year</h2>
      </div>
      {currentListOfCharacters?.map(
        (character) =>
          (filmInput.url &&
            character.name.match(new RegExp(`${searchInput}`, 'i')) &&
            character.films.includes(filmInput.url)) ||
          (!filmInput.url &&
            character.name.match(new RegExp(`${searchInput}`, 'i'))) ? (
            <Character character={character} key={character.name} />
          ) : null

        // if (filmInput.url) {
        //   if (
        //     character.name.match(new RegExp(`${searchInput}`, 'i')) &&
        //     character.films.includes(filmInput.url)
        //   ) {
        //     return <Character character={character} key={character.name} />;
        //   }
        // } else if (character.name.match(new RegExp(`${searchInput}`, 'i'))) {
        //   return <Character character={character} key={character.name} />;
        // } else return null;
      )}
    </ul>
  );
}

export default CharactersList;
