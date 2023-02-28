import React, { useState } from 'react';
import TickTile from './TickTile.jsx';

const TickList = function TickList({ ticks }) {
  const [numTicks, setNumTicks] = useState(6);

  return (
    <div className="tick-list">
      {ticks.slice(0, numTicks).map((tick) => (
        <TickTile
          tick={tick}
        />
      ))}
    </div>
  );
};

export default TickList;
