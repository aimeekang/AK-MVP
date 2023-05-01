import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RouteList from './ClimbList/RouteList.jsx';
import AreaList from './ClimbList/AreaList.jsx';

const Search = function Search({ climbs }) {
  const [area, setArea] = useState(false);
  const location = useLocation();
  const term = new URLSearchParams(location.search).get('term');

  return (
    <div>
      <h2>Showing results for </h2>
      <h2>{term}</h2>
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
