import React, { useState } from 'react';
import { routeGrades } from '../../utilities/mappings.js';
import * as helpers from '../../utilities/helpers.js';
import RoutesGrade from './Charts/RoutesGrade.jsx';
import BouldersGrade from './Charts/BouldersGrade.jsx';
import DaysOut from './Charts/DaysOut.jsx';
import Volume from './Charts/Volume.jsx';

const Trends = function Trends({ ticks }) {
  const grades = Object.entries(routeGrades);
  const daysOut = helpers.getDaysOut(ticks);
  console.log('days out', daysOut);

  return (
    <div>
      <h2>Trends</h2>
      <div className="grade-container">
        <RoutesGrade />
        <BouldersGrade />
      </div>
      <DaysOut daysOut={daysOut} />
      <Volume />
    </div>
  );
};

export default Trends;
