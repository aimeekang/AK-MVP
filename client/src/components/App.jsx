import React, { useState } from 'react';
import Ticks from './Ticks/Ticks.jsx';

const App = function App() {
  return (
    <div className="main">
      <h2>Routes and Ratings</h2>
      <div>
        <Ticks />
      </div>
    </div>
  );
};

export default App;
