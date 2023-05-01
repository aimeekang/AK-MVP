import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { ChartsContainer } from '../../../styles/styles.js';

const Volume = function Volume({ data }) {
  return (
    <ChartsContainer>
      <h3>Volume by Month</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" tickLine={false} tickMargin={10} tick={{ fontSize: 13 }} />
          <YAxis tick={{ fontSize: 13 }} />
          <Tooltip />
          <Area type="monotone" dataKey="count" stroke="#fb4e05" fill="#fb4e05" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartsContainer>
  );
};

export default Volume;
