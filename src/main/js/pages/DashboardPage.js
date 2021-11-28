import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      surveyDate: null,

      emotionalPerf: null,
      spiritualPerf: null,
      intellectualPerf: null,
      physicalPerf: null,
      environmentalPerf: null,
      financialPerf: null,
      socialPerf: null,
      occupationalPerf: null,

      emotionalImp: null,
      spiritualImp: null,
      intellectualImp: null,
      physicalImp: null,
      environmentalImp: null,
      financialImp: null,
      socialImp: null,
      occupationalImp: null,
    };
  }

  componentDidMount() {
    // retrieve performance data from dummy backend route
    fetch('/user/1/wellness-report')
      .then((response) => response.json())
      .then((obj) => this.setState({
        surveyDate: obj.surveyDate,
        emotionalPerf: obj.emotionalPerf,
        spiritualPerf: obj.spiritualPerf,
        intellectualPerf: obj.intellectualPerf,
        physicalPerf: obj.physicalPerf,
        environmentalPerf: obj.environmentalPerf,
        financialPerf: obj.financialPerf,
        socialPerf: obj.socialPerf,
        occupationalPerf: obj.occupationalPerf,
      }));

    fetch('/user/1')
      .then((response) => response.json())
      .then((user) => this.setState({
        emotionalImp: user.emotionalImp,
        spiritualImp: user.spiritualImp,
        intellectualImp: user.intellectualImp,
        physicalImp: user.physicalImp,
        environmentalImp: user.environmentalImp,
        financialImp: user.financialImp,
        socialImp: user.socialImp,
        occupationalImp: user.occupationalImp,
      }));
  }

  render() {
    const {
      surveyDate,
      emotionalPerf,
      intellectualPerf,
      socialPerf,
      spiritualPerf,
      environmentalPerf,
      occupationalPerf,
      financialPerf,
      physicalPerf,
      emotionalImp,
      spiritualImp,
      intellectualImp,
      physicalImp,
      environmentalImp,
      financialImp,
      socialImp,
      occupationalImp,
    } = this.state;
    const data = {
      labels: ['Emotional', 'Intellectual', 'Social', 'Spiritual', 'Environmental', 'Occupational', 'Financial', 'Physical'],
      datasets: [{
        label: 'Survey Performance',
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
      },
      {
        label: 'My Importance',
        backgroundColor: 'rgba(217,83,79,0.2)',
        borderColor: 'rgba(217,83,79,0.5)',
        data: [
          emotionalImp,
          spiritualImp,
          intellectualImp,
          physicalImp,
          environmentalImp,
          financialImp,
          socialImp,
          occupationalImp,
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
        <div className="bg-secondary p-5 mx-auto w-75 d-flex justify-content-center">
          <div style={{ height: '60vh', width: '60vh' }}>
            <Radar data={data} options={options} />
          </div>
          <div className="text-center w-75 pb-3 mx-auto my-5 bg-secondary text-white">
            <h4>Show Performance for</h4>
            <input type="date" name="chosen-date" value={surveyDate} onChange={(e) => this.handleDate(e)} />
          </div>
        </div>
      </div>
    );
  }
}
