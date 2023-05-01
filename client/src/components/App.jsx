import React, { useState, useEffect } from 'react';
import {
  Route, Routes, useNavigate
} from 'react-router-dom';
import axios from 'axios';
import Home from './Home/Home.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import Search from './Search/Search.jsx';
import {
  Header,
  HeaderContent,
  TextContainer,
  MainContainer
} from './styles/styles.js';

const App = function App() {
  const [input, setInput] = useState('');
  const [climbs, setClimbs] = useState('');
  const navigate = useNavigate();

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
        navigate(`/search?term=${term}`);
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search input={input} climbs={climbs} />} />
      </Routes>
    </MainContainer>
  );
};

export default App;
