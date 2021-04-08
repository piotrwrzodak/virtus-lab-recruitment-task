import React, { useState } from 'react';

function FilterSection({ searchInput, setSearchInput, films }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [title, setTitle] = useState('Filter by film');
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const selectItem = ({ title }) => {
    setTitle(title);
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
          <h3 className="dropdown__header-title">{title}</h3>
        </button>
        {dropdownOpen && (
          <div role="list" className="dropdown__list">
            {films?.map((item) => (
              <button
                type="button"
                className="dropdown__list__item"
                key={item.title}
                onClick={() => {
                  selectItem(item);
                  setDropdownOpen(!dropdownOpen);
                }}
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
