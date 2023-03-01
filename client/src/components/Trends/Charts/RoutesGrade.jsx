import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const RoutesGrade = function RoutesGrade({ data }) {
  return (
    <div>
      <h3>Routes by Grade</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="Sport" stackId="a" fill="#8884d8" />
          <Bar dataKey="Trad" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoutesGrade;
