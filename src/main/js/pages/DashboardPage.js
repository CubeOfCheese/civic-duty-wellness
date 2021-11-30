import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      surveyDate: null,
      physicalPerf: null,
      emotionalPerf: null,
      intellectualPerf: null,
      socialPerf: null,
      spiritualPerf: null,
      environmentalPerf: null,
      occupationalPerf: null,
      financialPerf: null,

      physicalImp: null,
      emotionalImp: null,
      intellectualImp: null,
      socialImp: null,
      spiritualImp: null,
      environmentalImp: null,
      occupationalImp: null,
      financialImp: null,
    };
  }

  componentDidMount() {
    // retrieve performance data from dummy backend route
    fetch('/user/1/wellness-report')
      .then((response) => response.json())
      .then((obj) => this.setState({
        surveyDate: obj.surveyDate,
        physicalPerf: obj.physicalPerf,
        emotionalPerf: obj.emotionalPerf,
        intellectualPerf: obj.intellectualPerf,
        socialPerf: obj.socialPerf,
        spiritualPerf: obj.spiritualPerf,
        environmentalPerf: obj.environmentalPerf,
        occupationalPerf: obj.occupationalPerf,
        financialPerf: obj.financialPerf,
      }));

    fetch('/user/1')
      .then((response) => response.json())
      .then((user) => this.setState({
        physicalImp: user.physicalImp,
        emotionalImp: user.emotionalImp,
        intellectualImp: user.intellectualImp,
        socialImp: user.socialImp,
        spiritualImp: user.spiritualImp,
        environmentalImp: user.environmentalImp,
        occupationalImp: user.occupationalImp,
        financialImp: user.financialImp,
      }));
  }

  render() {
    const {
      surveyDate,
      physicalPerf,
      emotionalPerf,
      intellectualPerf,
      socialPerf,
      spiritualPerf,
      environmentalPerf,
      occupationalPerf,
      financialPerf,
      physicalImp,
      emotionalImp,
      intellectualImp,
      socialImp,
      spiritualImp,
      environmentalImp,
      occupationalImp,
      financialImp,
    } = this.state;
    const data = {
      labels: ['Physical', 'Emotional', 'Intellectual', 'Social', 'Spiritual', 'Environmental', 'Occupational', 'Financial'],
      datasets: [{
        label: 'Survey Performance',
        backgroundColor: 'rgba(0,75,58,0.2)',
        borderColor: 'rgba(0,75,58,0.5)',
        data: [
          physicalPerf,
          emotionalPerf,
          intellectualPerf,
          socialPerf,
          spiritualPerf,
          environmentalPerf,
          occupationalPerf,
          financialPerf,
        ],
      },
      {
        label: 'My Importance',
        backgroundColor: 'rgba(217,83,79,0.2)',
        borderColor: 'rgba(217,83,79,0.5)',
        data: [
          physicalImp,
          emotionalImp,
          intellectualImp,
          socialImp,
          spiritualImp,
          environmentalImp,
          occupationalImp,
          financialImp,
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
        <div className="text-center w-75 pb-3 mx-auto my-5 bg-secondary text-white">
          <h4>Show Performance for</h4>
          <input type="date" name="chosen-date" value={surveyDate} onChange={(e) => this.handleDate(e)} />
        </div>
        <div className="bg-secondary p-5 mx-auto w-75 d-flex align-items-center flex-column">
          <div style={{ height: '60vh', width: '60vh' }}>
            <Radar data={data} options={options} />
          </div>
          <a href="/importance" className="my-3 btn btn-outline-light">Reevaluate Importance</a>
        </div>
      </div>
    );
  }
}
