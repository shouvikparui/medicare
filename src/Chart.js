

import React from "react";
import { Bar,Pie,Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";

function BarChart() {
    const data={
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{label: '# of Votes', data: [12, 19, 3, 5, 2, 3], borderWidth: 2,backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#111",
            "#2a71d0",
          ], },
          {label: '# of Colors', data: [8, 9, 13, 25, 4, 6], borderWidth: 2,backgroundColor: [
            "rgba(7,12,123,1)",
            "#e4f0f1",
            "#5eAF95",
            "#f3ba2f",
            
            "#2a21d0",
          ], },
          {label: '# of Custom', data: [32, 13, 13, 15, 12, 13], borderWidth: 2,backgroundColor: [
            "rgba(18,13,92,1)",
            "#ecf0f1",
            "#50aF95",
            "#f4ba2f",
            "#111",
            "#251d0",
          ], }]
    
      };
  return <>
           <Bar data={data}/>
           <Line data={data}/>
           <Pie data={data}/>
  </>;
}

export default BarChart;