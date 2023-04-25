import React from 'react';

const Search = function Search({ term, handleChange, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={term}
        placeholder="Find routes and areas"
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
