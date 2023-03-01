import React, { PureComponents } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import * as helpers from '../../../utilities/helpers.js';

const DaysOut = function DaysOut({ ticks }) {
  const daysOut = helpers.getDaysOut(ticks);
  const maxEntries = daysOut.slice(daysOut.length - 24);

  return (
    <div>
      <h3>Days Out By Month</h3>
      <AreaChart
        width={700}
        height={400}
        data={maxEntries}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default DaysOut;
