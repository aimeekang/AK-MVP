import React from 'react';
import * as helpers from '../../utilities/helpers.js';
import RoutesGrade from './Charts/RoutesGrade.jsx';
import BouldersGrade from './Charts/BouldersGrade.jsx';
import Volume from './Charts/Volume.jsx';
import { TrendsContainer, ChartsContainer, GradesContainer } from '../styles/styles.js';

const Trends = function Trends({ ticks }) {
  const grades = helpers.gradeData(ticks);
  const volume = helpers.volumeData(ticks);
  // const days = helpers.daysData(ticks);
  // console.log('days', days);

  return (
    <TrendsContainer>
      <div className="trends-header">
        <h2>Trends</h2>
      </div>
      <ChartsContainer>
        <GradesContainer>
          <RoutesGrade data={grades.routes} />
          <BouldersGrade data={grades.boulder} />
        </GradesContainer>
        <Volume data={volume} />
      </ChartsContainer>
    </TrendsContainer>
  );
};

export default Trends;
