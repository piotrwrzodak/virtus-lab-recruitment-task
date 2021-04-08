import React, { useState } from 'react';

function FilterSection({
  searchInput,
  setSearchInput,
  filmInput,
  setFilmInput,
  films,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleClick = (film) => {
    setFilmInput(film);
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="filter-section">
      <input
        type="text"
        className="searchbar"
        placeholder="Search.."
        value={searchInput}
        onChange={handleInputChange}
      />

      <div className="dropdown">
        <button
          type="button"
          className="dropdown__header"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <h3 className="dropdown__header-title">
            {filmInput.title ?? filmInput}
          </h3>
        </button>
        {dropdownOpen && (
          <div role="list" className="dropdown__list">
            {filmInput.url && (
              <button
                type="button"
                className="dropdown__list__item"
                onClick={() => handleClick('Filter by film')}
              >
                Reset filter{' '}
              </button>
            )}
            {films?.map((item) => (
              <button
                type="button"
                className="dropdown__list__item"
                key={item.url}
                onClick={() => handleClick(item)}
              >
                {item.title}{' '}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterSection;
