import React, { useState } from 'react';
import RouteList from './ClimbList/RouteList.jsx';
import AreaList from './ClimbList/AreaList.jsx';

const Search = function Search({ climbs, input }) {
  const [area, setArea] = useState(false);

  return (
    <div>
      <h2>Showing results for </h2>
      <h2>{input}</h2>
      <button
        type="button"
        onClick={() => setArea(false)}
      >
        Routes
      </button>
      <button
        type="button"
        onClick={() => setArea(true)}
      >
        Area
      </button>
      {area
        ? <AreaList climbs={climbs} />
        : <RouteList climbs={climbs} />}
    </div>
  );
};

export default Search;
