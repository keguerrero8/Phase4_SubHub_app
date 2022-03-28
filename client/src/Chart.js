import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ["#fc03b1", '#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#Fc2c03", "#9403fc", "#03fc5e", "#b1fc03", "#6703fc", "#a83236", "#d19bc8", "#293625"];
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
    // <div style={{width: "100%", height: 500}}>
    <ResponsiveContainer width="100%" height={400}>
      <PieChart >
        <Pie
          dataKey="monthly_price"
          isAnimationActive={true}
          data={subscriptions}
          cx="50%"
          cy="50%"
          outerRadius="85%"
          fill="green"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {subscriptions.map((sub, index) => (
            <Cell key={sub.id} fill={COLORS[index]} />
          ))}                  
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    // </div>
  );
}

export default Chart;