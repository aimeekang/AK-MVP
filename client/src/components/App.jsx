import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard.jsx';
import Ticks from './Ticks/Ticks.jsx';
import Trends from './Trends/Trends.jsx';
// import { ContentContainer, TContainer } from './styles/styles.js';

const App = function App() {
  const [ticks, setTicks] = useState([]);
  // const [page, setPage] = useState(0);
  // const [user, setUser] = useState();

  const updateList = () => {
    axios
      .get('/rr/ticks')
      .then((results) => setTicks(results.data.results))
      .catch((err) => console.error(err));
  };

  // const updateUser = () => {
  //   axios
  //     .get('/rr/climbers')
  //     .then((results) => )
  // };

  useEffect(() => {
    updateList();
  }, []);

  return (
    <div className="main-container">
      <h1>Routes and Ratings</h1>
      <div className="content-container">
        <Dashboard />
        <div className="t-container">
          <Ticks ticks={ticks} updateList={updateList} />
          <Trends ticks={ticks} />
        </div>
      </div>
    </div>
  );
};

export default App;
