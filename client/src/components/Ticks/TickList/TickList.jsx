import React, { useState, useEffect } from 'react';
import TickTile from './TickTile.jsx';
import { TickListContainer, TickButton, TickListItems } from '../../styles/styles.js';

const TickList = function TickList({ ticks, filter, updateList }) {
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
    <TickListContainer>
      <TickListItems>
        {filteredTicks.slice(0, numTicks).map((tick) => (
          <TickTile
            key={tick.tick_id}
            tick={tick}
            updateList={updateList}
          />
        ))}
      </TickListItems>
      <div className="tick-list-footer">
        {(filteredTicks.length > 6 && numTicks < filteredTicks.length)
            && (
              <TickButton
                className="footer-button"
                type="button"
                onClick={() => setNumTicks(numTicks + 6)}
                style={{ marginRight: '10px' }}
              >
                Show More
              </TickButton>
            )}
        <TickButton>Add Tick</TickButton>
      </div>
    </TickListContainer>
  );
};

export default TickList;
