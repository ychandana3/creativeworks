import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
const DoughnutReport = () => {
  // Sample data for the Doughnut report
  const doughnutData = {
    chartData: {
      labels: ['Active', 'Inactive', 'In Progress'],
      datasets: [{
        data: [300, 150, 50],
        backgroundColor: ['#3498db', '#2ecc71', '#7f8c8d']
      }]
    },
    summary: {
      active: { label: 'Active', value: '300' },
      inactive: { label: 'Inactive', value: '150' },
      inProgress: { label: 'In Progress', value: '50' }
    }
  };

  return (
    <div className="bg-white rounded-lg flex flex-col shadow-md p-6 mb-4">
        <h2 className="text-4xl font-bold mb-4">User Status</h2>
        <div className='flex'>         
            {doughnutData.chartData && (
                <div className="flex items-center justify-center mb-6">
                <Doughnut data={doughnutData.chartData} />
                </div>
            )}
      {doughnutData.summary && (
        <ul className='pt-40'>
          {Object.keys(doughnutData.summary).map((key) => (
            <li className = 'pb-4' key={key}>
              <p className="text-base text-slate-400 font-semibold inline-block">{doughnutData.summary[key].label}</p>
              <p className="text-base text-gray-700 font-medium pl-2 inline-block">{doughnutData.summary[key].value}</p>
            </li>
          ))}
        </ul>
      )}
        </div>
    </div>
  );
};

export default DoughnutReport;
