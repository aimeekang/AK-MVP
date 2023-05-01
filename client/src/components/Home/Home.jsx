import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard.jsx';
import Ticks from './Ticks/Ticks.jsx';
import Trends from './Trends/Trends.jsx';
import { ContentContainer, TContainer } from '../styles/styles.js';

const Home = function Home() {
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
    <ContentContainer>
      <Dashboard ticks={ticks} />
      <TContainer>
        <Ticks ticks={ticks} updateList={updateList} />
        <Trends ticks={ticks} />
      </TContainer>
    </ContentContainer>
  );
};

export default Home;
