import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';

const TickTile = function TickTile({ tick }) {
  const [reported, setReported] = useState(false);
  const [edit, setEdit] = useState(false);

  const formatDate = (date) => {
    const parsedDate = parseISO(date);
    return format(parsedDate, 'PP');
  };

  return (
    <div className="tick-tile">
      <div className="route-name">
        {tick.tick_route}
      </div>
      <div>
        {`${tick.style} / ${tick.lead_style}`}
      </div>
      <div className="route-name">
        {formatDate(tick.tick_date)}
      </div>
      <div className="route-location">
        {tick.location}
      </div>
      <div className="route-wall">
        {tick.wall}
      </div>
      <div className="route-grade">
        {tick.tick_grade}
      </div>
      <div className="route-type">
        {tick.route_type}
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TickTile;
