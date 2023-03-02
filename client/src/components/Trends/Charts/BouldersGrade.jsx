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
import { ChartsContainer } from '../../styles/styles.js';

const BouldersGrade = function BouldersGrade({ data }) {
  return (
    <ChartsContainer>
      <h3>Boulders by Grade</h3>
      <ResponsiveContainer width="100%" height={200}>
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
          <Bar dataKey="Boulder" fill="#fb4e05" />
        </BarChart>
      </ResponsiveContainer>
    </ChartsContainer>
  );
};

export default BouldersGrade;
