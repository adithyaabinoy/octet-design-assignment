import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
    constructor(props) {
        super(props);
        console.log(props, 'oros')
        this.state = {
        
          series: [{
            name: 'Received',
            data: props.countReceived
          }, {
            name: 'Not Received',
            data: props.countApplied
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: false
              },
            },
            responsive: [{
              breakpoint: 767,
              options: {
                chart: {
                  width: 767,
                }
              },
              plotOptions: {
                bar: {
                  borderRadius: 3,
                },
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 6,
              },
            },
            xaxis: {
                categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            fill: {
              opacity: 1,
              colors: ['#94E6D4', '#EFF6FF']
            }
          },
        };
      }
  
    render() {
      return (
        <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="100%"
        height={320}
        />
      );
    }
  }
  

export default ApexChart;