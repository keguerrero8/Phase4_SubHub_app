import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Chart( { subscriptions }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart >
        <Pie
          dataKey="monthly_price"
          isAnimationActive={true}
          data={subscriptions}
          cx="50%"
          cy="50%"
          outerRadius={130}
          fill="green"
          label={renderCustomizedLabel}
          labelLine={false}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Chart;