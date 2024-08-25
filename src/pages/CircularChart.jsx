import React,{useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularChart = ({ chartData }) => {
  useEffect(() => {
    console.log(chartData)
  }, []);
  return (
    <div style={{ width: '300px', height: '250px' }}>
      <h6>{chartData.heading}</h6>
      <Doughnut
        data={chartData}
        options={{
          maintainAspectRatio: false, 
          plugins: {
            legend: {
              display: true,
              position: 'right',
            },
          },
        }}
      />
    </div>
  );
};

export default CircularChart;
