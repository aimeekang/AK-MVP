import React from 'react';

const AreaTile = function AreaTile({ area }) {
  return (
    <div className="area-tile">
      <div>{area.name}</div>
    </div>
  );
};

export default AreaTile;
