import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './Todos/Todos.jsx';
import Ticks from './Ticks/Ticks.jsx';
import Trends from './Trends/Trends.jsx';

const App = function App() {
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
    <div className="main">
      <h1>Routes and Ratings</h1>
      <div>
        <Todos />
        <Ticks ticks={ticks} />
        <Trends ticks={ticks} />
      </div>
    </div>
  );
};

export default App;
