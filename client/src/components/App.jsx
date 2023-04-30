import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard.jsx';
import Ticks from './Ticks/Ticks.jsx';
import Trends from './Trends/Trends.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import Search from './Search/Search.jsx';
import {
  Header,
  HeaderContent,
  TextContainer,
  MainContainer,
  ContentContainer,
  TContainer
} from './styles/styles.js';

const App = function App() {
  const [page, setPage] = useState('Profile');
  const [ticks, setTicks] = useState([]);
  const [input, setInput] = useState('');
  const [climbs, setClimbs] = useState('');

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
    setInput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const term = input.toLowerCase();
    axios
      .get('/rr/climbs', { params: { term } })
      .then((results) => {
        setClimbs(results.data);
        // setInput('');
        setPage('Search');
      })
      .catch((err) => console.error(err));
  };

  return (
    <MainContainer>
      <Header>
        <HeaderContent>
          <TextContainer>
            dynolabs
          </TextContainer>
          <SearchBar
            input={input}
            setInput={setInput}
            handleChange={handleChange}
            handleSearch={handleSearch}
          />
        </HeaderContent>
      </Header>
      {page === 'Profile' && (
      <ContentContainer>
        <Dashboard ticks={ticks} />
        <TContainer>
          <Ticks ticks={ticks} updateList={updateList} />
          <Trends ticks={ticks} />
        </TContainer>
      </ContentContainer>
      )}
      {page === 'Search' && (
        <Search
          input={input}
          climbs={climbs}
        />
      )}
    </MainContainer>
  );
};

export default App;
