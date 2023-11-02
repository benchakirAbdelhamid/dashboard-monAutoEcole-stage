import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

class LineCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Semaine derriere 68,768DH",
          data: [11, 10, 19, 18, 20, 27, 24],
        },
        {
          name: "Cette semaine 78,211DH",
          data: [9, 10, 15, 17, 18, 25, 30],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        colors: ["#545454", "#000"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Revenue",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "thu", "Fri", "Sat", "Sun"],
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default LineCharts;
