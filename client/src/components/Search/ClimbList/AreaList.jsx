import React, { useState, useEffect } from 'react';
import AreaTile from './AreaTile.jsx';

const AreaList = function AreaList({ climbs }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    setAreas(climbs.areas);
  }, [climbs]);

  return (
    <div>
      {areas.length > 0 ? (
        areas.map((area) => (
          <AreaTile
            key={area.id}
            area={area}
          />
        ))
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
};

export default AreaList;
