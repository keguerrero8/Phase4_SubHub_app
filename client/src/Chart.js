import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ["#fc03b1", '#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#Fc2c03", "#9403fc", "#03fc5e", "#b1fc03", "#6703fc", "#a83236", "#d19bc8", "#293625", "#db9a84", "#00ffe5", "#884b94"];
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

function Chart( { subsThisMonth }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart >
        <Pie
          dataKey="monthly_price"
          isAnimationActive={true}
          data={subsThisMonth}
          cx="50%"
          cy="50%"
          outerRadius="85%"
          fill="green"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {subsThisMonth.map((sub, index) => (
            <Cell key={sub.id} fill={COLORS[index]} />
          ))}                  
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Chart;