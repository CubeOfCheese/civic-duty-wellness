import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import $ from 'jquery';
import { Redirect } from 'react-router';

export default class UserWellnessSurvey extends Component {
  constructor() {
    super();
    this.state = {
      complete: false,
      invalidDate: -1,
      surveyInfo: {
        userId: window.localStorage.getItem('userId'),
        surveyDate: '',
        physicalPerf: null,
        emotionalPerf: null,
        intellectualPerf: null,
        socialPerf: null,
        spiritualPerf: null,
        environmentalPerf: null,
        occupationalPerf: null,
        financialPerf: null,
        activities: [],
      },
      currentActivityIsComplete: null,
      currentActivity: {
        activityName: '', hours: null, minutes: null, intensity: null,
      },
    };
    this.handlePerformanceChange = this.handlePerformanceChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.handleAddActivity = this.handleAddActivity.bind(this);
    this.dateToFormattedString = this.dateToFormattedString.bind(this);
  }

  handlePerformanceChange(event) {
    const { surveyInfo } = this.state;
    const dimension = event.target.name;
    const newPerformance = surveyInfo;
    newPerformance[dimension] = Number(event.target.value);
    this.setState({
      surveyInfo: newPerformance,
    });
  }

  handleDate(event) {
    const { surveyInfo } = this.state;
    const newSurveyInfo = surveyInfo;
    if (event.target.value === '') {
      this.setState({ invalidDate: -1 });
      return;
    }
    newSurveyInfo.surveyDate = event.target.value;
    this.setState({
      surveyInfo: newSurveyInfo,
    }, () => {
      const { surveyDate } = surveyInfo;
      const jwt = window.localStorage.getItem('jwt');
      const userId = window.localStorage.getItem('userId');
      const url = `/user/${userId}/survey`;
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
              invalidDate: 0,
              // date is not invalid when no survey exists for selected date
            });
          } else {
            this.setState({
              invalidDate: 1,
              // date is invalid if survey already exists for selected date
            });
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error:', error);
        });
    });
  }

  handleActivityChange(event, key) {
    const { currentActivity } = this.state;
    const newCurrentActivity = currentActivity;
    newCurrentActivity[key] = event.target.value;
    this.setState({
      currentActivity: newCurrentActivity,
    });
  }

  handleAddActivity() {
    const { currentActivity, surveyInfo } = this.state;
    const { activities } = surveyInfo;
    const currentActivtyIsDefined = Object.values(currentActivity).every((val) => (val !== null && val !== '' && typeof val !== 'undefined'));
    if (currentActivtyIsDefined) {
      activities.push(
        {
          activityName: currentActivity.activityName,
          hours: currentActivity.hours,
          minutes: currentActivity.minutes,
          intensity: currentActivity.intensity,
        },
      );
      this.setState({
        currentActivityIsComplete: true,
      });
      $(document).ready(() => {
        window.$('#survey-activities-popup').modal();
        window.$('#survey-activities-popup').modal('hide');
        window.$('#activityForm').trigger('reset');
        this.setState({
          currentActivity: {
            activityName: '', hours: null, minutes: null, intensity: null,
          },
        });
      });
    } else {
      this.setState({
        currentActivityIsComplete: false,
      });
    }
  }

  handleSubmit() {
    const url = '/survey/add';
    const { surveyInfo } = this.state;
    const jwt = window.localStorage.getItem('jwt');
    const request = {
      method: 'POST',
      headers: ({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      }),
      body: JSON.stringify(surveyInfo),
    };
    fetch(url, request)
      .then(() => {
        this.setState({ complete: true });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  }

  // function provided by http://curlybrackets.co/blog/javascript-date-format-yyyy-mm-dd/
  dateToFormattedString(d) {
    const yyyy = d.getFullYear().toString();
    const mm = (d.getMonth() + 1).toString(); // getMonth() is zero-based
    const dd = d.getDate().toString();
    return `${yyyy}-${mm[1] ? mm : `0${mm[0]}`}-${dd[1] ? dd : `0${dd[0]}`}`;
  }

  render() {
    const {
      invalidDate, currentActivityIsComplete, surveyInfo, complete,
    } = this.state;
    const { activities } = surveyInfo;
    const now = new Date();
    const maxDate = this.dateToFormattedString(now);
    if (complete) {
      return (<Redirect to="/" />);
    }
    return (
      <div>
        <h2 className="bg-primary text-center text-light mb-5 p-3">Wellness Survey</h2>
        <form className="text-center">
          <div className="text-center w-75 pb-3 mx-auto my-5 bg-secondary text-white">
            <h3>Select Date for Survey</h3>
            <input type="date" name="chosen-date" max={maxDate} onChange={(e) => this.handleDate(e)} />
            {invalidDate === 1 ? (
              <p className="alert alert-danger alert-dismissible fade show" role="alert">
                Survey already exists for selected date.
              </p>
            )
              : null}
          </div>
          {invalidDate === 0 ? (
            <div>
              <div className="my-5 w-75 px-5 mx-auto bg-secondary text-white text-right">
                <h3 className="text-center">Performance</h3>
                <table className="table w-50 mx-auto text-white">
                  <thead>
                    <tr>
                      <th style={{ width: '10px' }} scope="col">1</th>
                      <th style={{ width: '10px' }} scope="col">2</th>
                      <th style={{ width: '10px' }} scope="col">3</th>
                      <th style={{ width: '10px' }} scope="col">4</th>
                      <th style={{ width: '10px' }} scope="col">5</th>
                      <th style={{ width: '10px' }} scope="col">6</th>
                      <th style={{ width: '10px' }} scope="col">7</th>
                      <th style={{ width: '10px' }} scope="col">8</th>
                      <th style={{ width: '10px' }} scope="col">9</th>
                      <th style={{ width: '10px' }} scope="col">10</th>
                      <th style={{ width: '10px' }} scope="col">Dimension</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onChange={(e) => this.handlePerformanceChange(e)}>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="1" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="2" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="3" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="4" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="5" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="6" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="7" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="8" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="9" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="physicalPerf" value="10" /></td>
                      <td style={{ width: '10px' }}><p>Physical</p></td>
                    </tr>
                    <tr onChange={(e) => this.handlePerformanceChange(e)}>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="1" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="2" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="3" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="4" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="5" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="6" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="7" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="8" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="9" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="emotionalPerf" value="10" /></td>
                      <td style={{ width: '10px' }}><p>Emotional</p></td>
                    </tr>
                    <tr onChange={(e) => this.handlePerformanceChange(e)}>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="1" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="2" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="3" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="4" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="5" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="6" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="7" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="8" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="9" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="intellectualPerf" value="10" /></td>
                      <td style={{ width: '10px' }}><p>Intellectual</p></td>
                    </tr>
                    <tr onChange={(e) => this.handlePerformanceChange(e)}>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="1" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="2" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="3" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="4" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="5" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="6" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="7" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="8" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="9" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="socialPerf" value="10" /></td>
                      <td style={{ width: '10px' }}><p>Social</p></td>
                    </tr>
                    <tr onChange={(e) => this.handlePerformanceChange(e)}>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="1" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="2" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="3" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="4" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="5" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="6" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="7" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="8" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="9" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="spiritualPerf" value="10" /></td>
                      <td style={{ width: '10px' }}><p>Spiritual</p></td>
                    </tr>
                    <tr onChange={(e) => this.handlePerformanceChange(e)}>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="1" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="2" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="3" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="4" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="5" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="6" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="7" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="8" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="9" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="environmentalPerf" value="10" /></td>
                      <td style={{ width: '10px' }}><p>Environmental</p></td>
                    </tr>
                    <tr onChange={(e) => this.handlePerformanceChange(e)}>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="1" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="2" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="3" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="4" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="5" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="6" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="7" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="8" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="9" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="occupationalPerf" value="10" /></td>
                      <td style={{ width: '10px' }}><p>Occupational</p></td>
                    </tr>
                    <tr onChange={(e) => this.handlePerformanceChange(e)}>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="1" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="2" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="3" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="4" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="5" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="6" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="7" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="8" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="9" /></td>
                      <td style={{ width: '10px' }}><input type="radio" name="financialPerf" value="10" /></td>
                      <td style={{ width: '10px' }}><p>Financial</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="my-5 w-75 px-5 mx-auto bg-secondary text-white text-right">
                <h3 className="text-center">Activities</h3>
                <div className="w-50 mx-auto">
                  {activities.length > 0 ? (
                    <div className="row">
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
                <button type="button" className="btn btn-outline-light my-3" data-toggle="modal" data-target="#survey-activities-popup">
                  Add Activity
                </button>
              </div>
              <input id="survey-submit-button" className="m-3 btn btn-outline-primary" type="button" value="Submit" onClick={this.handleSubmit} />
            </div>
          )
            : null}
        </form>
        <div className="modal fade" id="survey-activities-popup" tabIndex="-1" role="dialog" aria-labelledby="survey-activities-popup" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Add Activity</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="activityForm">
                  <Form.Group className="mb-3" controlId="formBasicActivityName">
                    <Form.Label>Activity Name</Form.Label>
                    <div className="row mx-2">
                      <Form.Control
                        type="text"
                        placeholder="Activity Name"
                        onBlur={(e) => this.handleActivityChange(e, 'activityName')}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicActivityDuration">
                    <Form.Label>Duration</Form.Label>
                    <div className="row mx-2">
                      <Form.Control
                        type="number"
                        placeholder="hh"
                        name="durationHours"
                        className="w-25"
                        maxlength="2"
                        min="0"
                        max="24"
                        onKeyDown={(e) => (e.which !== 8 && e.which !== 0
                          && (e.which < 48 || e.which > 57))
                          && e.preventDefault()}
                        onBlur={(e) => this.handleActivityChange(e, 'hours')}
                      />
                      :
                      <Form.Control
                        type="number"
                        placeholder="mm"
                        name="durationMinutes"
                        className="w-25"
                        maxlength="2"
                        min="0"
                        max="59"
                        onKeyDown={(e) => (e.which !== 8 && e.which !== 0
                          && (e.which < 48 || e.which > 57))
                          && e.preventDefault()}
                        onBlur={(e) => this.handleActivityChange(e, 'minutes')}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicActivityIntensity">
                    <Form.Label>Intensity</Form.Label>
                    <div className="row mx-2">
                      <Form.Label className="col text-center">Low</Form.Label>
                      <Form.Label className="col text-center">Medium</Form.Label>
                      <Form.Label className="col text-center">High</Form.Label>
                    </div>
                    <div className="row mx-2" onBlur={(e) => this.handleActivityChange(e, 'intensity')}>
                      <input type="radio" name="Intensity" className="col" value="1" />
                      <input type="radio" name="Intensity" className="col" value="2" />
                      <input type="radio" name="Intensity" className="col" value="3" />
                    </div>
                  </Form.Group>
                </form>
                {currentActivityIsComplete === false ? (
                  <div>
                    <p className="alert alert-danger fade show" role="alert">
                      Activity is not completed. Fill in all sections before submitting.
                    </p>
                  </div>
                )
                  : null}
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" onClick={(e) => this.handleAddActivity(e)}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
