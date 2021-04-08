import React, { useEffect, useState } from 'react';
import CharactersList from './charactersList/';
import FilterSection from './filterSection/';

function Container({
  initialCharacters,
  loadMore,
  possibleLoadMore,
  count,
  loading,
}) {
  const [currentListOfCharacters, setCurrentListOfCharacters] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filmInput, setFilmInput] = useState('Filter by films');

  useEffect(() => {
    setCurrentListOfCharacters(initialCharacters);
  }, [initialCharacters, count, loading]);

  return loading ? (
    <div className="container">
      <h1 className="loading-header">Loading...</h1>
    </div>
  ) : (
    <div className="container">
      {currentListOfCharacters && (
        <>
          <FilterSection
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            filmInput={filmInput}
            setFilmInput={setFilmInput}
          />
          <CharactersList
            searchInput={searchInput}
            currentListOfCharacters={currentListOfCharacters}
            setCurrentListOfCharacters={setCurrentListOfCharacters}
            filmInput={filmInput}
          />
        </>
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
