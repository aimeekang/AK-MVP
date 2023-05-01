import React from 'react';
import Profile from './Profile.jsx';
import Friends from './Friends.jsx';
import Stats from './Stats.jsx';
import { DashboardContainer } from '../../styles/styles.js';

const Dashboard = function Dashboard({ ticks }) {
  return (
    <DashboardContainer>
      <Profile />
      <Friends />
      <Stats ticks={ticks} />
    </DashboardContainer>
  );
};

export default Dashboard;
