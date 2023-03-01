import React, { useState } from 'react';
import * as helpers from '../../utilities/helpers.js';
import RoutesGrade from './Charts/RoutesGrade.jsx';
import BouldersGrade from './Charts/BouldersGrade.jsx';
import DaysOut from './Charts/DaysOut.jsx';
import Volume from './Charts/Volume.jsx';

const Trends = function Trends({ ticks }) {
  const grades = helpers.gradeData(ticks);

  return (
    <div>
      <h2>Trends</h2>
      <div className="grade-container">
        <RoutesGrade data={grades.routes} />
        <BouldersGrade ticks={grades.boulder} />
      </div>
      <DaysOut ticks={ticks} />
      <Volume ticks={ticks} />
    </div>
  );
};

export default Trends;
