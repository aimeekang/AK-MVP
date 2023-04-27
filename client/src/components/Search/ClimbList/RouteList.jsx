import React, { useState, useEffect } from 'react';
import RouteTile from './RouteTile.jsx';

const RouteList = function RouteList({ climbs }) {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(climbs.routes);
  }, [climbs]);

  return (
    <div>
      {routes.length > 0 ? (
        routes.map((route) => (
          <RouteTile
            key={route.id}
            route={route}
          />
        ))
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
};

export default RouteList;
