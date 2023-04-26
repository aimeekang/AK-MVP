import React from 'react';

const SearchBar = function SearchBar({ input, handleChange, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={input}
        placeholder="Find routes and areas"
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
