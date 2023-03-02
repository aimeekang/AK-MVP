import React from 'react';
import { StatsContainer } from '../styles/styles.js';

const Stats = function Stats({ ticks }) {
  const stats = {
    routes: {
      month: 8,
      year: 34,
      all_time: ticks.length
    },
    days: {
      month: 2,
      year: 10,
      all_time: 550
    },
    gradeType: {
      Sport: '5.12b',
      Trad: '5.10a',
      Boulder: 'V4'
    },
    volumeType: {
      Sport: '600',
      Trad: '100',
      Boulder: '35'
    }
  };

  return (
    <StatsContainer>
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
        <div className="stat-header">Highest Grades</div>
        <div className="stat-numbers">
          <div className="stat">{stats.gradeType.Sport}</div>
          <div className="stat">{stats.gradeType.Trad}</div>
          <div className="stat">{stats.gradeType.Boulder}</div>
        </div>
        <div className="stat-metrics">
          <div className="metric">Lead</div>
          <div className="metric">Boulder</div>
          <div className="metric">Trad</div>
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
          <div className="metric">Boulder</div>
          <div className="metric">Trad</div>
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
