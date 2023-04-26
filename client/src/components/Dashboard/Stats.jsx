import React from 'react';
import { format } from 'date-fns';
import { StatsContainer } from '../styles/styles.js';
import * as helpers from '../../utilities/helpers.js';

const Stats = function Stats({ ticks }) {
  const today = new Date(); // Thu Mar 02 2023 10:01:15 GMT-0800 (Pacific Standard Time)
  // console.log('year', format(new Date(), 'yyyy'));

  const stats = {
    routes: {
      month: 8,
      year: 34,
      all_time: ticks.length
    },
    days: {
      month: 2,
      year: 10,
      all_time: 256
    },
    gradeType: {
      Sport: '',
      Trad: '',
      Boulder: 'V4'
    },
    volumeType: {
      Sport: null,
      Trad: null,
      Boulder: null
    }
  };

  const routeStats = helpers.routeGradeStats(ticks);
  stats.gradeType.Sport = routeStats.Sport;
  stats.gradeType.Trad = routeStats.Trad;

  const volumeByType = helpers.calcVolumeStats(ticks);
  stats.volumeType.Sport = volumeByType.Sport;
  stats.volumeType.Trad = volumeByType.Trad;
  stats.volumeType.Boulder = volumeByType.Boulder;

  return (
    <StatsContainer>
      <div className="stats-header">
        <h2>Stats</h2>
      </div>
      <div className="stat-category">
        <div className="stat-header">Highest Grades</div>
        <div className="stat-numbers">
          <div className="stat">{stats.gradeType.Sport}</div>
          <div className="stat">{stats.gradeType.Trad}</div>
          <div className="stat">{stats.gradeType.Boulder}</div>
        </div>
        <div className="stat-metrics">
          <div className="metric">Lead</div>
          <div className="metric">Trad</div>
          <div className="metric">Boulder</div>
        </div>
      </div>

      <div className="stat-category">
        <div className="stat-header">Volume by Type</div>
        <div className="stat-numbers">
          <div className="stat">{stats.volumeType.Sport}</div>
          <div className="stat">{stats.volumeType.Trad}</div>
          <div className="stat">{stats.volumeType.Boulder}</div>
        </div>

        <div className="stat-metrics">
          <div className="metric">Lead</div>
          <div className="metric">Trad</div>
          <div className="metric">Boulder</div>
        </div>
      </div>

      <div className="stat-category">
        <div className="stat-header">Routes</div>
        <div className="stat-numbers">
          <div className="stat">{stats.routes.month}</div>
          <div className="stat">{stats.routes.year}</div>
          <div className="stat">{stats.routes.all_time}</div>
        </div>

        <div className="stat-metrics">
          <div className="metric">this month</div>
          <div className="metric">this year</div>
          <div className="metric">all time</div>
        </div>
      </div>

      <div className="stat-category">
        <div className="stat-header">Days Out</div>
        <div className="stat-numbers">
          <div className="stat">{stats.days.month}</div>
          <div className="stat">{stats.days.year}</div>
          <div className="stat">{stats.days.all_time}</div>
        </div>

        <div className="stat-metrics">
          <div className="metric">this month</div>
          <div className="metric">this year</div>
          <div className="metric">all time</div>
        </div>
      </div>
    </StatsContainer>
  );
};

export default Stats;
