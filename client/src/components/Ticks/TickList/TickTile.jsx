import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

const TickTile = function TickTile({ tick, updateList }) {
  // const [reported, setReported] = useState(false);
  const [edit, setEdit] = useState(false);

  const formatDate = (date) => {
    const parsedDate = parseISO(date);
    return format(parsedDate, 'PP');
  };

  const handleReported = () => {
    axios
      .put(`/rr/ticks/${tick.tick_id}/flag`)
      .then((results) => {
        console.info(results.status);
        updateList();
      })
      .catch((err) => console.error('Error deleting review', err));
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
      {/* <button onClick={handleEdit}>Edit</button> */}
      <button onClick={handleReported}>Delete</button>
    </div>
  );
};

export default TickTile;
