import React, { useState, useEffect } from 'react';
import RouteTile from './RouteTile.jsx';

const RouteList = function RouteList({ climbs }) {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(climbs.routes);
  }, []);

  return (
    <div>
      {routes.map((route) => (
        <RouteTile
          key={route.id}
          route={route}
        />
      ))}
    </div>
  );
};

export default RouteList;
