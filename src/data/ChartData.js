export const ChartData = [
  {
    title: 'CSPM executive Dashboard',
    chartGraphData: [
      {
        id: 1,
        heading: 'Cloud Accounts',
        labels: ['Connected 2', 'Not Connected 2'],
        datasets: [
          {
            data: [2, 2],
            backgroundColor: ['#4F9EF9', '#D9E8FC'],
          },
        ],
        show: true
      },
      {
        id: 2,
        heading: 'Cloud Account Risk Management',
        labels: ['Failed 1689', 'Warning 681', 'Not Available 36', 'Passed 7253'],
        datasets: [
          {
            data: [1689, 681, 36, 7253],
            backgroundColor: ['#FF6384', '#FFCE56', '#FF9F40', '#36A2EB'],
          },
        ],
        show: true
      },
    ],
  },
  {
    title: 'CWPP Dashboard',
    chartGraphData: [
      {
        id: 3,
        heading: 'top 5 namespace specific alert',
        labels: ['no data to show'],
        datasets: [
          {
            data: 'no data to show',

          },
        ],
        show: true
      },
      {
        id: 4,
        heading: 'WorkLoad Alerts',
        labels: ['No Data To Show'],
        datasets: [
          {
            data: 'No Data To Show',

          },
        ],
        show: true
      },
    ],
  },
  {
    title: 'Registry Scan',
    chartGraphData: [
      {
        id: 5,
        heading: 'Image Risk Assesment',
        labels: ["Critical", "High", "Low", "Midium"],
        datasets: [
          {
            data: [1689, 681, 36, 7253],
            backgroundColor: ['#FF6384', '#FFCE56', '#FF9F40', '#36A2EB'],
          },
        ],
        show: true
      },
      {
        id: 6,
        heading: 'Image security issues',
        labels: ['total 2 images'],
        datasets: [
          {
            data: [2, 2],
            backgroundColor: ['#FF6384'],
          },
        ],
        show: true
      },
    ],
  },
];
