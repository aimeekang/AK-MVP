import React, { useState } from 'react';
import { routeGrades } from '../../utilities/mappings.js';
import RoutesGrade from './Charts/RoutesGrade.jsx';
import BouldersGrade from './Charts/BouldersGrade.jsx';
import DaysOut from './Charts/DaysOut.jsx';
import Volume from './Charts/Volume.jsx';

const Trends = function Trends({ ticks }) {
  const grades = Object.entries(routeGrades);

  return (
    <div>
      <h2>Trends</h2>
      <div className="grade-container">
        <RoutesGrade />
        <BouldersGrade />
      </div>
      <DaysOut />
      <Volume />
    </div>
  );
};

export default Trends;
