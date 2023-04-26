import React, { useState } from 'react';
import RouteList from './RouteList.jsx';
import AreaList from './AreaList.jsx';

const Search = function Search({ climbs, input }) {
  const [area, setArea] = useState(false);

  return (
    <div>
      <h2>Showing results for </h2>
      <h2>{input}</h2>
      <button onClick={() => setArea(false)}>Routes</button>
      <button onClick={() => setArea(true)}>Area</button>
      {area
        ? <RouteList />
        : <AreaList />}
    </div>
  );
};

export default Search;
