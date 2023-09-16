import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

class ColumnCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [15, 20, 18, 30, 8, 22],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        // colors: 'red',
        plotOptions: {
          bar: {
            columnWidth: "30%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          labels: {
            style: {
              colors: "gray",
              fontSize: "12px",
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart_columns">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={"100%"}
          height={250}
        />
      </div>
    );
  }
}

export default ColumnCharts;
