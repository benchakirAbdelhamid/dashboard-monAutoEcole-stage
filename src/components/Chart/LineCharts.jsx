import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts'

// class LineCharts extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [{
//             name: "Semaine derriere 68,768DH",
//             data: [11, 10, 19, 18, 20, 27, 25]
//           },
//           {
//             name: "Cette semaine 78,211DH",
//             data: [9, 10, 15, 16, 18, 25,30 ]
//           },
//         ],
//         options: {
//           chart: {
//             height: 350,
//             type: 'line',
//             zoom: {
//               enabled: false
//             },
//           },
//           dataLabels: {
//             enabled: false
//           },
//           stroke: {
//             width: [5, 7, 5],
//             curve: 'straight',
//             dashArray: [0, 0, 0]
//           },
//           title: {
//             text: 'Page Statistics',
//             align: 'left'
//           },
//           legend: {
//             tooltipHoverFormatter: function(val, opts) {
//               return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
//             }
//           },
//           markers: {
//             size: 0,
//             hover: {
//               sizeOffset: 6
//             }
//           },
//           xaxis: {
//             categories: ['Mon', 'Tue', 'Wed', 'thu', 'Fri', 'Sat', 'Sun',  ],
//           },
//           tooltip: {
//             y: [
//               {
//                 title: {
//                   formatter: function (val) {
//                     return val + " (mins)"
//                   }
//                 }
//               },
//               {
//                 title: {
//                   formatter: function (val) {
//                     return val + " per session"
//                   }
//                 }
//               },
//               {
//                 title: {
//                   formatter: function (val) {
//                     return val;
//                   }
//                 }
//               }
//             ]
//           },
//           grid: {
//             borderColor: '#f1f1f1',
//           }
//         },
      
      
//       };
//     }

  

//     render() {
//       return (
        

//   <div id="chart">
// <ReactApexChart  options={this.state.options}  series={this.state.series} width={'100%'} type="line" height={300} />
// </div>


//       );
//     }
//   }

class LineCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
        series: [{
            name: "Semaine derriere 68,768DH",
            data: [11, 10, 19, 18, 20, 27, 24]
          },
          {
            name: "Cette semaine 78,211DH",
            data: [9, 10, 15, 17, 18, 25,30]
          },
        ],
      options: {
        chart: {
          height: 350,
          type: 'line',
                      zoom: {
              enabled: false
            },
        },
        colors: [ '#545454','#000'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Revenue',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories:['Mon', 'Tue', 'Wed', 'thu', 'Fri', 'Sat', 'Sun',  ],
        
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>


    );
  }
}



  export default LineCharts;