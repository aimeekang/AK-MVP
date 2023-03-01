import React from 'react';
import * as helpers from '../../../utilities/helpers.js';

const DaysOut = function DaysOut({ ticks }) {
  const daysOut = helpers.getDaysOut(ticks);
  const maxEntries = daysOut.slice(daysOut.length - 24);

  return (
    <div>
      <h3>Days Out By Month</h3>
    </div>
  );
};

export default DaysOut;
