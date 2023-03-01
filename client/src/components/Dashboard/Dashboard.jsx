import React from 'react';
import Profile from './Profile.jsx';
import Stats from './Stats.jsx';

const Dashboard = function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Profile />
      <Stats />
    </div>
  );
};

export default Dashboard;
