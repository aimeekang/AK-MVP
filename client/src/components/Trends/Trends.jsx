import React from 'react';
import * as helpers from '../../utilities/helpers.js';
import RoutesGrade from './Charts/RoutesGrade.jsx';
import BouldersGrade from './Charts/BouldersGrade.jsx';
import DaysOut from './Charts/DaysOut.jsx';
import Volume from './Charts/Volume.jsx';

const Trends = function Trends({ ticks }) {
  const grades = helpers.gradeData(ticks);
  const volume = helpers.volumeData(ticks);
  const days = helpers.daysData(ticks);
  console.log('days', days);

  return (
    <div>
      <h2>Trends</h2>
      <div className="grade-container">
        <RoutesGrade data={grades.routes} />
        <BouldersGrade data={grades.boulder} />
      </div>
      <Volume data={volume} />
      {/* <DaysOut data={days} /> */}
    </div>
  );
};

export default Trends;
