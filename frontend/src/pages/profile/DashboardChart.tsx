import Chart from "react-apexcharts";

const DashboardChart = ({data}) => {
  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [new Date().getFullYear()], // Placeholder for the x-axis label
    },
    yaxis: {
      title : 'Nombres'
    },
    fill: {
      opacity: 1,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  const series = [
    {
      name: "Refusee",
      data: [data.refused],
      color: "#f87171",
    },
    {
      name: "Traitment",
      data: [data.inProgress],
      color: "#60a5fa",
    },
    {
      name: "Doc Requis",
      data: [data.Docrequired],
      color: "#facc15",
    },
    {
      name: "Approuvee",
      data: [data.approuved],
      color: "#34d399",
    },
  ];

  return <Chart options={options} series={series} type="bar" height={280} />;
};

export default DashboardChart;
