import React, { useState } from 'react';
import Todos from './Todos/Todos.jsx';
import Ticks from './Ticks/Ticks.jsx';

const App = function App() {
  return (
    <div className="main">
      <h2>Routes and Ratings</h2>
      <div>
        <Todos />
        <Ticks />
      </div>
    </div>
  );
};

export default App;
