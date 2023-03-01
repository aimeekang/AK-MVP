import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TickList from './TickList/TickList.jsx';

const Ticks = function Ticks({ ticks, updateList }) {
  const [filter, setFilter] = useState('recent');

  return (
    <div className="ticks">
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
    </div>
  );
};

export default Ticks;
