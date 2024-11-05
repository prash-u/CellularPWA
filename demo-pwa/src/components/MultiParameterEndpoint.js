import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Flow Cytometry Data',
      data: [12, 19, 3, 5, 2],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

function MultiParameterEndpoint() {
  return (
    <div>
      <h2>Multi-Parameter Endpoint Experience</h2>
      <Line data={data} />
    </div>
  );
}

export default MultiParameterEndpoint;