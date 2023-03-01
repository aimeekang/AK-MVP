import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const BouldersGrade = function BouldersGrade({ data }) {
  return (
    <div>
      <h3>Boulders by Grade</h3>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="Boulder" fill="#82ca9d" />
      </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default BouldersGrade;
