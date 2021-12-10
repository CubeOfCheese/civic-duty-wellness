import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

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

      activities: [],

      userFirstName: '',
    };
    this.handleDate = this.handleDate.bind(this);
  }

  componentDidMount() {
    const jwt = window.localStorage.getItem('jwt');
    const userId = window.localStorage.getItem('userId');
    const request = {
      method: 'GET',
      headers: ({
        Authorization: `Bearer ${jwt}`,
      }),
    };
    fetch(`/user/${userId}/survey/recent`, request)
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
        activities: obj.activities,
      }));

    fetch(`/user/${userId}`, request)
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
    const userId = window.localStorage.getItem('userId');
    this.setState({
      surveyDate: newSurveyDate,
    }, () => {
      // retrieve performance data from dummy backend route
      const { surveyDate } = this.state;
      const url = `/user/${userId}/survey`;
      const jwt = window.localStorage.getItem('jwt');
      const request = {
        method: 'POST',
        headers: ({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        }),
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
          if (obj.activities !== null) {
            this.setState({
              activities: obj.activities,
            });
          } else {
            this.setState({
              activities: [],
            });
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error:', error);
        });
    });
  }

  render() {
    const {
      userFirstName, surveyDate, invalidDate, activities,
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
        backgroundColor: 'rgba(255, 255, 255,0.2)',
        borderColor: 'rgba(255, 255, 255,0.5)',
        data: [
          physicalPerf, emotionalPerf, intellectualPerf, socialPerf,
          spiritualPerf, environmentalPerf, occupationalPerf, financialPerf,
        ],
      },
      {
        label: 'My Importance',
        backgroundColor: 'rgba(0, 0, 0,0.2)',
        borderColor: 'rgba(0, 0, 0,0.5)',
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
      },
      scales: {
        r: {
          angleLines: {
            color: ['red', 'orange', 'yellow', 'green', 'rgba(34, 157, 181, 1)', 'rgba(32, 23, 99, 1)', 'rgba(81, 31, 130, 1)', 'rgba(252, 3, 148,1)'],
          },
          grid: {
            color: 'rgba(255,255,255, 0.2',
          },
          pointLabels: {
            color: 'white',
            font: {
              size: 14,
            },
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
    const dashboardHeading = `${userFirstName}'s Dashboard`;
    return (
      <div>
        {userFirstName === '' ? (<h2 className="bg-primary text-center text-light mb-5 p-3">Dashboard</h2>)
          : <h2 className="bg-primary text-center text-light mb-5 p-3">{dashboardHeading}</h2>}
        <div className="text-center w-75 pb-3 mx-auto my-5 bg-secondary text-white">
          <h4>Show Performance for</h4>
          <input type="date" name="chosen-date" value={surveyDate} onChange={(e) => this.handleDate(e)} />
          {invalidDate ? (
            <div className="text-center w-75 pb-3 mx-auto my-5 bg-secondary text-white">
              <div className="alert alert-danger" role="alert">
                There is no survey that was completed on this date
              </div>
            </div>
          )
            : null}
        </div>
        <div className="bg-secondary p-5 mx-auto w-75 d-flex align-items-center flex-column">
          <div className="w-100" style={{ maxHeight: '60vh', maxWidth: '60vh' }}>
            <Radar data={data} options={options} />
          </div>
          <Link to="/importance" className="mt-2 mb-1 btn btn-outline-light">Reevaluate Importance</Link>
        </div>
        { activities && activities.length ? (
          <div className="bg-secondary text-light w-75 text-center mt-5 mx-auto my-5 pb-3 pt-3">
            <h3>Activities</h3>
            <div className="w-75 text-center mx-auto my-3">
              {activities.length > 0 ? (
                <div className="w-100 row h6">
                  <p className="col">Activity</p>
                  <p className="col">Duration</p>
                  <p className="col">Intensity</p>
                </div>
              )
                : null}
              {
              activities.map((item) => (
                <div className="row">
                  <p className="col">{item.activityName}</p>
                  <p className="col">
                    {item.hours}
                    :
                    {item.minutes}
                  </p>
                  <p className="col">{item.intensity}</p>
                </div>
              ))
            }
            </div>
          </div>
        )
          : null}
      </div>
    );
  }
}
