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
            left: 10,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" tickLine={false} tickMargin={10} tick={{ fontSize: 13 }} angle={-45} />
          <YAxis tick={{ fontSize: 13 }} />
          <Tooltip />
          <Bar dataKey="Boulder" fill="#fb4e05" />
        </BarChart>
      </ResponsiveContainer>
    </ChartsContainer>
  );
};

export default BouldersGrade;
