import React, { useState } from 'react';
import TickList from './TickList/TickList.jsx';
import { TicksContainer } from '../../styles/styles.js';

const Ticks = function Ticks({ ticks, updateList }) {
  const [filter, setFilter] = useState('recent');

  return (
    <TicksContainer>
      <div className="ticks-header">
        <h2>Ticks</h2>
        <span>{ticks.length} climbs</span>
      </div>
      <div>
        <TickList
          ticks={ticks}
          updateList={updateList}
          filter={filter}
        />
      </div>
    </TicksContainer>
  );
};

export default Ticks;
