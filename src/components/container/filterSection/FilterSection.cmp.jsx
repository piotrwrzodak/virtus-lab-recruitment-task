import React from 'react';

function FilterSection({ searchInput, setSearchInput }) {
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
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
    </div>
  );
}

export default FilterSection;
