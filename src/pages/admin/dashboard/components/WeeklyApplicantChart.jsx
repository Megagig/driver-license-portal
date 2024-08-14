import React from 'react';
import ReactApexChart from 'react-apexcharts';

const WeeklyApplicantChart = () => {
  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#4F46E5', '#10B981', '#F59E0B'],
  };

  const series = [
    {
      name: 'New',
      data: [450, 340, 320, 470, 160, 390, 390],
    },
    {
      name: 'Renewal',
      data: [250, 140, 280, 370, 260, 240, 340],
    },
    {
      name: 'Reissue',
      data: [150, 220, 140, 200, 130, 140, 230],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Weekly Applicant</h2>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default WeeklyApplicantChart;
