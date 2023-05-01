import React, { useState, useEffect } from 'react';
import { StatsContainer } from '../../styles/styles.js';
import * as helpers from '../../../utilities/helpers.js';

const Stats = function Stats({ ticks }) {
  const today = new Date(); // Thu Mar 02 2023 10:01:15 GMT-0800 (Pacific Standard Time)
  const initial = {
    routes: {
      month: null,
      year: null,
      all_time: null
    },
    days: {
      month: null,
      year: null,
      all_time: null
    },
    gradeType: {
      Sport: '',
      Trad: '',
      Boulder: ''
    },
    volumeType: {
      Sport: null,
      Trad: null,
      Boulder: null
    }
  };

  const [stats, setStats] = useState(initial);

  useEffect(() => {
    const routeStats = helpers.routeGradeStats(ticks);
    const volumeByType = helpers.calcVolumeStats(ticks);

    setStats({
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
        Sport: routeStats.Sport,
        Trad: routeStats.Trad,
        Boulder: 'V4'
      },
      volumeType: {
        Sport: volumeByType.Sport,
        Trad: volumeByType.Trad,
        Boulder: volumeByType.Boulder
      }
    });

    console.log('volume type: ', volumeByType.Sport); // 605;
  }, [ticks]);

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
