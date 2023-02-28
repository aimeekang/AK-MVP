import React, { useState, useEffect } from 'react';
import TickTile from './TickTile.jsx';

const TickList = function TickList({ ticks, filter }) {
  const [numTicks, setNumTicks] = useState(6);
  const [filteredTicks, setFilteredTicks] = useState([]);

  const filterTicks = () => {
    if (filter !== 'recent') {
      const filtered = ticks.filter((tick) => tick.starred);
      setFilteredTicks(filtered);
    } else {
      setFilteredTicks(ticks);
    }
  };

  useEffect(() => {
    filterTicks();
  }, [filter, ticks]);

  return (
    <div className="tick-list">
      {filteredTicks.slice(0, numTicks).map((tick) => (
        <TickTile
          tick={tick}
        />
      ))}
    </div>
  );
};

export default TickList;
