import axios from "axios";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./statdiv.css";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          
        },
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        xaxis: {
          type: 'datetime'
        } ,
        stroke: {
          curve: 'smooth'
        },
        colors: ['#1e8f53'],
        dataLabels: {
          enabled: true
        },
        grid: {
          borderColor: "#555",
          clipMarkers: true,
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        
      },
      
       series: [],

      responsive: [{
        breakpoint: undefined,
        options: {},
    }]

    };

  }
  async componentDidMount(){
    const dateIndice=[];
    console.log(this.props.user.rateData);
    for (const obj of this.props.user.rateData)
    {
      dateIndice.push({x: new Date(obj[0]).getTime(), y:parseFloat(obj[1])})
    }
    this.setState({
      series:[{
        name:"Indice de confiance",
        data:dateIndice,
      }]
    })
    console.log(dateIndice)

  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;