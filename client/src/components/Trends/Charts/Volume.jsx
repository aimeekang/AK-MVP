import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import * as helpers from '../../../utilities/helpers.js';

const Volume = function Volume({ ticks }) {
  const volume = helpers.getVolume(ticks);

  return (
    <div>
      <h3>Volume by Month</h3>
      <AreaChart
        width={1000}
        height={400}
        data={volume}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Volume;
