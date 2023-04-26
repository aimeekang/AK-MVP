import React from 'react';

const RouteTile = function RouteTile({ route }) {
  return (
    <div className="route-tile">
      <div>{route.name}</div>
      <div>{route.yds}</div>
      <div>{route.fa}</div>
    </div>
  );
};

export default RouteTile;
