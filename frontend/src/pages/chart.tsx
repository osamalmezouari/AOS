// src/AreaChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart = () => {
  const options = {
    chart: {
      type: 'area', // Change type to 'area'
    },
    labels: ['January', 'February', 'March', 'April'],
    fill: {
      opacity: 0.9,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: 'bottom',
    },
  };

  const series = [
    {
      name: 'Refuse',
      data: [30, 40, 45, 50],
    },
    {
      name: 'Accepte',
      data: [35, 45, 50, 55],
    },
    {
        name: 'Nesscaire',
        data: [65, 32, 58, 15],
      }
      ,
      {
        name: 'traitment',
        data: [24, 10, 30, 19],
      }
    // Add more series data as needed
  ];

  return (
    <Chart options={options} series={series} type="area" height={280} />
  );
};

export default AreaChart;
