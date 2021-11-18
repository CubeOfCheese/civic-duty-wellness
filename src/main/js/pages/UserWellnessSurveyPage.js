import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';

export default class UserWellnessSurveyPage extends Component {
  constructor() {
    super();
    this.state = {
      surveyInfo: {
        userId: 1,
        surveyDate: '',
        emotionalPerf: null,
        intellectualPerf: null,
        socialPerf: null,
        spiritualPerf: null,
        environmentalPerf: null,
        occupationalPerf: null,
        financialPerf: null,
        physicalPerf: null,
      },
    };
    this.handlePerformanceChange = this.handlePerformanceChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    newSurveyInfo.surveyDate = event.target.value;
    this.setState({
      surveyInfo: newSurveyInfo,
    });
  }

  handleSubmit() {
    const { changeSurv } = this.props;
    const url = '/survey/add';
    const { surveyInfo } = this.state;
    const request = {
      method: 'POST',
      headers: ({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(surveyInfo),
    };
    fetch(url, request)
      .then((response) => {
        if (response.ok) {
          changeSurv();
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  }

  render() {
    const { lastSurveyTaken } = this.props;
    const date = new Date();
    const todaysDate = date.toDateString();
    if (lastSurveyTaken === todaysDate) {
      return (<Redirect to="/" />);
    }
    return (
      <div>
        <h2 className="bg-primary text-center text-light mb-5 p-3">Wellness Survey</h2>
        <form className="text-center">
          <div className="text-center w-75 pb-3 mx-auto my-5 bg-secondary text-white">
            <h3>Select Date for Survey</h3>
            <input type="date" name="chosen-date" onChange={(e) => this.handleDate(e)} />
          </div>
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
              </tbody>
            </table>
            <div className="d-flex flex-row-reverse">
              <button type="button" className="my-3 btn btn-outline-light">Reevaluate Importance</button>
            </div>
          </div>
          <input id="survey-submit-button" className="m-3 btn btn-outline-primary" type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
        {/*
          <form id="survey-activities-popup" action="/action_page.php" className="form-container">
            <h1>Add Activity</h1>
            <label htmlFor="activity">
              <b>Activity</b>
              <input type="text" placeholder="Activity Name" name="activity" />
            </label>
            <label htmlFor="Duration">
              <b>Duration</b>
              <input type="time" name="duration" />
            </label>
            <button type="button" class="btn btn-outline-light">Add</button>
            <button type="button" class="btn btn-outline-light" onClick="*closeForm()">
              Close
            </button>
        */}
      </div>
    );
  }
}

UserWellnessSurveyPage.propTypes = {
  changeSurv: PropTypes.func.isRequired,
  lastSurveyTaken: PropTypes.string.isRequired,
};
