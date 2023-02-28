import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TickList from './TickList/TickList.jsx';

const Ticks = function Ticks({ ticks }) {
  const [filter, setFilter] = useState('recent');

  return (
    <div>
      <h2>Ticks</h2>
      <span>{ticks.length}</span>
      <div>
        <TickList ticks={ticks} filter={filter} />
      </div>
    </div>
  );
};

export default Ticks;
