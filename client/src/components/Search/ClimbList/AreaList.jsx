import React, { useState, useEffect } from 'react';

const AreaList = function AreaList({ climbs }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    setAreas(climbs.areas);
  }, []);

  return (
    <h3>This will be an area list</h3>
  );
};

export default AreaList;
