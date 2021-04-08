import React, { useEffect, useState } from 'react';
import Character from './character';

function Container(props) {
  const {
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
    loading,
  } = props;

  let [currentListOfCharacters, setCurrentListOfCharacters] = useState(null);

  useEffect(() => {
    setCurrentListOfCharacters(initialCharacters);
  }, [initialCharacters, count, loading]);

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

  return loading ? (
    <div className="container">
      <h1 className="loading-header">Loading...</h1>
    </div>
  ) : (
    <div className="container">
      {currentListOfCharacters && (
        <ul className="character-list">
          <div className="character character--col-names">
            <h2 onClick={() => handleNameClick()}>Name</h2>
            <h2 onClick={() => handleGenderClick()}>Gender</h2>
            <h2 onClick={() => handleBirthYearClick()}>Birth year</h2>
          </div>
          {currentListOfCharacters?.map((character) => {
            return <Character character={character} key={character.name} />;
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

export default Container;
