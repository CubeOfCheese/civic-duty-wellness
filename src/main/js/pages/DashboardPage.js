import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      emotionalPerf: null,
      spiritualPerf: null,
      intellectualPerf: null,
      physicalPerf: null,
      environmentalPerf: null,
      financialPerf: null,
      socialPerf: null,
      occupationalPerf: null,
    };
  }

  componentDidMount() {
    // retrieve performance data from dummy backend route
    fetch('/user/1/wellness-report')
      .then((response) => response.json())
      .then((obj) => this.setState({
        emotionalPerf: obj.emotionalPerf,
        spiritualPerf: obj.spiritualPerf,
        intellectualPerf: obj.intellectualPerf,
        physicalPerf: obj.physicalPerf,
        environmentalPerf: obj.environmentalPerf,
        financialPerf: obj.financialPerf,
        socialPerf: obj.socialPerf,
        occupationalPerf: obj.occupationalPerf,
      }));
  }

  render() {
    const {
      emotionalPerf,
      intellectualPerf,
      socialPerf,
      spiritualPerf,
      environmentalPerf,
      occupationalPerf,
      financialPerf,
      physicalPerf,
    } = this.state;
    const data = {
      labels: ['Emotional', 'Intellectual', 'Social', 'Spiritual', 'Environmental', 'Occupational', 'Financial', 'Physical'],
      datasets: [{
        label: 'My Wellness',
        backgroundColor: 'rgba(0,75,58,0.2)',
        borderColor: 'rgba(0,75,58,0.5)',
        data: [
          emotionalPerf,
          intellectualPerf,
          socialPerf,
          spiritualPerf,
          environmentalPerf,
          occupationalPerf,
          financialPerf,
          physicalPerf,
        ],
      }],
    };
    const options = {
      responsive: true,
      scale: {
        min: 0,
        max: 10,
        pointLabels: {
          font: {
            size: 16,
          },
        },
      },
      scales: {
        r: {
          angleLines: {
            color: 'rgba(255,255,255, 0.2',
          },
          grid: {
            color: 'rgba(255,255,255, 0.2',
          },
          pointLabels: {
            color: 'white',
          },
          ticks: {
            color: 'white',
            backdropColor: 'rgba(0,0,0,0)',
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'white',
          },
        },
      },
    };
    return (
      <div>
        <h2 className="bg-primary text-center text-light mb-5 p-3">Profile</h2>
        <div className="bg-secondary p-5 mx-auto my-5 w-75">
          <div className="p-5" style={{ height: '600px', width: '600px', paddingLeft: '115px' }}>
            <Radar data={data} options={options} />
          </div>
        </div>
      </div>
    );
  }
}
