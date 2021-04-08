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
          />
          <CharactersList
            searchInput={searchInput}
            currentListOfCharacters={currentListOfCharacters}
            setCurrentListOfCharacters={setCurrentListOfCharacters}
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
