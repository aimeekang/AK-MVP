import React from 'react';
import { SearchIcon } from '../styles/styles.js';

const SearchBar = function SearchBar({ input, handleChange, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={input}
        placeholder="Find routes and areas"
        onChange={handleChange}
      />
      <SearchIcon onClick={handleSearch} />
    </form>
  );
};

export default SearchBar;
