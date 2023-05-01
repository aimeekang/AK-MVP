import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { ChartsContainer } from '../../../styles/styles.js';

const RoutesGrade = function RoutesGrade({ data }) {
  const selectData = data.slice(0, 13);

  return (
    <ChartsContainer>
      <h3>Routes by Grade</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={500}
          height={300}
          data={selectData}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" tickLine={false} tickMargin={12} tick={{ fontSize: 13 }} angle={-45} />
          <YAxis tick={{ fontSize: 13 }} />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="Sport" stackId="a" fill="#fb4e05" />
          <Bar dataKey="Trad" stackId="a" fill="#eeac8e" />
        </BarChart>
      </ResponsiveContainer>
    </ChartsContainer>
  );
};

export default RoutesGrade;
