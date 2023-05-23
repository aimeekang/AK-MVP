import React from 'react';

const RouteTile = function RouteTile({ route }) {
  const types = Object.keys(route.type); // ['sport']

  return (
    <div className="route-tile">
      <div>{route.name}</div>
      <div>{route.yds}</div>
      {route.fa.toLowerCase() !== 'unknown' && (
        <div>FA: {route.fa}</div>
      )}
      <div>{types.join(',')}</div>
      <div>{route.path_tokens.join(' > ')}</div>
    </div>
  );
};

export default RouteTile;
