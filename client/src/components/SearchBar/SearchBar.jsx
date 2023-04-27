import React from 'react';
import { SearchIcon, SearchInput } from '../styles/styles.js';

const SearchBar = function SearchBar({ input, handleChange, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <SearchInput
        type="text"
        value={input}
        placeholder="Find routes and areas"
        onChange={handleChange}
      />
      <SearchIcon />
    </form>
  );
};

export default SearchBar;
