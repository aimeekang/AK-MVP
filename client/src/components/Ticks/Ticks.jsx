import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TickList from './TickList/TickList.jsx';

const Ticks = function Ticks() {
  const [ticks, setTicks] = useState([]);

  const updateList = () => {
    axios
      .get('/rr/ticks')
      .then((results) => setTicks(results.data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    updateList();
  }, []);

  return (
    <div>
      <h2>Ticks</h2>
      <div>
        <TickList ticks={ticks} />
      </div>
    </div>
  );
};

export default Ticks;
