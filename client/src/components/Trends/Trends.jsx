import React, { useState, useEffect } from 'react';
import * as helpers from '../../utilities/helpers.js';
import RoutesGrade from './Charts/RoutesGrade.jsx';
import BouldersGrade from './Charts/BouldersGrade.jsx';
import Volume from './Charts/Volume.jsx';
import { TrendsContainer, ChartsContainer, GradesContainer } from '../styles/styles.js';

const Trends = function Trends({ ticks }) {
  const [grades, setGrades] = useState({});
  const [volume, setVolume] = useState({});

  useEffect(() => {
    const gradeObj = helpers.gradeData(ticks);
    const volumeObj = helpers.volumeData(ticks);
    setGrades(gradeObj);
    setVolume(volumeObj);
  }, [ticks]);

  return (
    <TrendsContainer>
      <div className="trends-header">
        <h2>Trends</h2>
      </div>
      <ChartsContainer>
        {grades.routes && grades.boulder && (
        <GradesContainer>
          <RoutesGrade data={grades.routes} />
          <BouldersGrade data={grades.boulder} />
        </GradesContainer>
        )}
        <Volume data={volume} />
      </ChartsContainer>
    </TrendsContainer>
  );
};

export default Trends;
