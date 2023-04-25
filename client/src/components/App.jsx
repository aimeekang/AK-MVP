import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard.jsx';
import Ticks from './Ticks/Ticks.jsx';
import Trends from './Trends/Trends.jsx';
import Search from './Search/Search.jsx';
import {
  Header,
  TextContainer,
  MainContainer,
  ContentContainer,
  TContainer
} from './styles/styles.js';

const App = function App() {
  const [page, setPage] = useState('Profile');
  const [ticks, setTicks] = useState([]);
  const [term, setTerm] = useState('');

  const updateList = () => {
    axios
      .get('/rr/ticks')
      .then((results) => setTicks(results.data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    updateList();
  }, []);

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('i am being searched');
  };

  return (
    <MainContainer>
      <Header>
        <TextContainer>
          dynolabs
        </TextContainer>
        <Search
          term={term}
          setTerm={setTerm}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
      </Header>
      <ContentContainer>
        <Dashboard ticks={ticks} />
        <TContainer>
          <Ticks ticks={ticks} updateList={updateList} />
          <Trends ticks={ticks} />
        </TContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default App;
