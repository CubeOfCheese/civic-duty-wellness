import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import moment from 'moment';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      surveyDate: '',
      invalidDate: false,

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
    this.handleDate = this.handleDate.bind(this);
  }

  componentDidMount() {
    fetch('/user/1/survey/recent')
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

  handleDate(event) {
    const newSurveyDate = event.target.value;
    this.setState({
      surveyDate: newSurveyDate,
    }, () => {
      // retrieve performance data from dummy backend route
      const { surveyDate } = this.state;
      const url = '/user/1/survey';
      const request = {
        method: 'POST',
        headers: ({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ surveyDate }),
      };
      fetch(url, request)
        .then((response) => response.json())
        .then((obj) => {
          if (obj.surveyID < 0) {
            this.setState({
              invalidDate: true,
            });
          } else {
            this.setState({
              invalidDate: false,
            });
          }
          this.setState({
            physicalPerf: obj.physicalPerf,
            emotionalPerf: obj.emotionalPerf,
            intellectualPerf: obj.intellectualPerf,
            socialPerf: obj.socialPerf,
            spiritualPerf: obj.spiritualPerf,
            environmentalPerf: obj.environmentalPerf,
            occupationalPerf: obj.occupationalPerf,
            financialPerf: obj.financialPerf,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error:', error);
        });
    });
  }

  render() {
    const {
      surveyDate, invalidDate,
      physicalPerf, emotionalPerf, intellectualPerf, socialPerf,
      spiritualPerf, environmentalPerf, occupationalPerf, financialPerf,
      physicalImp, emotionalImp, intellectualImp, socialImp,
      spiritualImp, environmentalImp, occupationalImp, financialImp,
    } = this.state;
    const data = {
      labels: ['Physical', 'Emotional', 'Intellectual', 'Social',
        'Spiritual', 'Environmental', 'Occupational', 'Financial'],
      datasets: [{
        label: 'Survey Performance',
        backgroundColor: 'rgba(0,75,58,0.2)',
        borderColor: 'rgba(0,75,58,0.5)',
        data: [
          physicalPerf, emotionalPerf, intellectualPerf, socialPerf,
          spiritualPerf, environmentalPerf, occupationalPerf, financialPerf,
        ],
      },
      {
        label: 'My Importance',
        backgroundColor: 'rgba(217,83,79,0.2)',
        borderColor: 'rgba(217,83,79,0.5)',
        data: [
          physicalImp, emotionalImp, intellectualImp, socialImp,
          spiritualImp, environmentalImp, occupationalImp, financialImp,
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
          <div className="text-center w-75 pb-3 mx-auto my-5 bg-secondary text-white">
            <h3>Showing Performance For:</h3>
            <input type="date" name="chosen-date" value={surveyDate} onChange={(e) => this.handleDate(e)} max={moment().format('YYYY-MM-DD')} />
            {invalidDate ? (
              <div className="alert alert-danger" role="alert">
                There is no survey that was completed on this date
              </div>
            )
              : null}
          </div>
          <a href="/importance" className="my-3 btn btn-outline-light">Reevaluate Importance</a>
        </div>
      </div>
    );
  }
}
