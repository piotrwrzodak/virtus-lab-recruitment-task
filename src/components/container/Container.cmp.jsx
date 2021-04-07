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
  } = props;

  let [currentListOfCharacters, setCurrentListOfCharacters] = useState(null);

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
