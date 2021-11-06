import React, { Component } from 'react';

export default class UserWellnessSurvey extends Component {
  constructor() {
    super();
    this.state = {
      surveyInfo: {
        surveyDate: '',
        physicalPerf: null,
        emotionalPerf: null,
        environmentalPerf: null,
        financialPerf: null,
        intellectualPerf: null,
        occupationalPerf: null,
        socialPerf: null,
        spiritualPerf: null,
      }
    }
    this.handlePerformanceChange = this.handlePerformanceChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePerformanceChange(event) {
      let dimension = event.target.name;
      let newPerformance = Object.assign({}, this.state.surveyInfo);
      newPerformance[dimension] = event.target.value;
      this.setState({
        surveyInfo: newPerformance
        });
  }

  handleDate(event) {
      let date = 'surveyDate';
      let newDate = Object.assign({}, this.state.surveyInfo);
      newDate[date] = event.target.value;
      this.setState({
        surveyInfo: newDate
      });
  }

  handleSubmit() {
    const url = '/survey/add'
    let surveyData = this.state.surveyInfo;
    const request = {
        method: 'POST',
        headers: ({ 'Content-Type': 'application/json'}),
        body: JSON.stringify(surveyData),
    };

    fetch(url, request)
    .then(response => { //// TODO: We should be communicating this to the user
        console.log(response);  // Success!
    }, reason => {
        console.error(reason); // Error!
    });
  }

  render() {
    return (
      <div>
        <section className="transparent" id="survey">
          <h2>Wellness Survey</h2>
          <section className="gold-square" id="survey-date">
            <h3>Select Date for Survey</h3>
            <input type="date" name="chosen-date" onChange={(e) => this.handleDate(e)}/>
          </section>
          <section className="gold-square" id="survey-performance">
            <h3>Performance</h3>
            <table>
             <tbody>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>Dimension</th>
              </tr>
              <tr onChange={(e) => this.handlePerformanceChange(e)}>
                <td><input type="radio" name="emotionalPerf" value="1" /></td>
                <td><input type="radio" name="emotionalPerf" value="2" /></td>
                <td><input type="radio" name="emotionalPerf" value="3" /></td>
                <td><input type="radio" name="emotionalPerf" value="4" /></td>
                <td><input type="radio" name="emotionalPerf" value="5" /></td>
                <td><input type="radio" name="emotionalPerf" value="6" /></td>
                <td><input type="radio" name="emotionalPerf" value="7" /></td>
                <td><input type="radio" name="emotionalPerf" value="8" /></td>
                <td><input type="radio" name="emotionalPerf" value="9" /></td>
                <td><input type="radio" name="emotionalPerf" value="10" /></td>
                <td><p>Emotional</p></td>
              </tr>
              <tr onChange={(e) => this.handlePerformanceChange(e)}>
                <td><input type="radio" name="environmentalPerf" value="1" /></td>
                <td><input type="radio" name="environmentalPerf" value="2" /></td>
                <td><input type="radio" name="environmentalPerf" value="3" /></td>
                <td><input type="radio" name="environmentalPerf" value="4" /></td>
                <td><input type="radio" name="environmentalPerf" value="5" /></td>
                <td><input type="radio" name="environmentalPerf" value="6" /></td>
                <td><input type="radio" name="environmentalPerf" value="7" /></td>
                <td><input type="radio" name="environmentalPerf" value="8" /></td>
                <td><input type="radio" name="environmentalPerf" value="9" /></td>
                <td><input type="radio" name="environmentalPerf" value="10" /></td>
                <td><p>Environmental</p></td>
              </tr>
              <tr onChange={(e) => this.handlePerformanceChange(e)}>
                <td><input type="radio" name="financialPerf" value="1" /></td>
                <td><input type="radio" name="financialPerf" value="2" /></td>
                <td><input type="radio" name="financialPerf" value="3" /></td>
                <td><input type="radio" name="financialPerf" value="4" /></td>
                <td><input type="radio" name="financialPerf" value="5" /></td>
                <td><input type="radio" name="financialPerf" value="6" /></td>
                <td><input type="radio" name="financialPerf" value="7" /></td>
                <td><input type="radio" name="financialPerf" value="8" /></td>
                <td><input type="radio" name="financialPerf" value="9" /></td>
                <td><input type="radio" name="financialPerf" value="10" /></td>
                <td><p>Financial</p></td>
              </tr>
              <tr onChange={(e) => this.handlePerformanceChange(e)}>
                <td><input type="radio" name="intellectualPerf" value="1" /></td>
                <td><input type="radio" name="intellectualPerf" value="2" /></td>
                <td><input type="radio" name="intellectualPerf" value="3" /></td>
                <td><input type="radio" name="intellectualPerf" value="4" /></td>
                <td><input type="radio" name="intellectualPerf" value="5" /></td>
                <td><input type="radio" name="intellectualPerf" value="6" /></td>
                <td><input type="radio" name="intellectualPerf" value="7" /></td>
                <td><input type="radio" name="intellectualPerf" value="8" /></td>
                <td><input type="radio" name="intellectualPerf" value="9" /></td>
                <td><input type="radio" name="intellectualPerf" value="10" /></td>
                <td><p>Intellectual</p></td>
              </tr>
              <tr onChange={(e) => this.handlePerformanceChange(e)}>
                <td><input type="radio" name="occupationalPerf" value="1" /></td>
                <td><input type="radio" name="occupationalPerf" value="2" /></td>
                <td><input type="radio" name="occupationalPerf" value="3" /></td>
                <td><input type="radio" name="occupationalPerf" value="4" /></td>
                <td><input type="radio" name="occupationalPerf" value="5" /></td>
                <td><input type="radio" name="occupationalPerf" value="6" /></td>
                <td><input type="radio" name="occupationalPerf" value="7" /></td>
                <td><input type="radio" name="occupationalPerf" value="8" /></td>
                <td><input type="radio" name="occupationalPerf" value="9" /></td>
                <td><input type="radio" name="occupationalPerf" value="10" /></td>
                <td><p>Occupational</p></td>
              </tr>
              <tr onChange={(e) => this.handlePerformanceChange(e)}>
                <td><input type="radio" name="physicalPerf" value="1" /></td>
                <td><input type="radio" name="physicalPerf" value="2" /></td>
                <td><input type="radio" name="physicalPerf" value="3" /></td>
                <td><input type="radio" name="physicalPerf" value="4" /></td>
                <td><input type="radio" name="physicalPerf" value="5" /></td>
                <td><input type="radio" name="physicalPerf" value="6" /></td>
                <td><input type="radio" name="physicalPerf" value="7" /></td>
                <td><input type="radio" name="physicalPerf" value="8" /></td>
                <td><input type="radio" name="physicalPerf" value="9" /></td>
                <td><input type="radio" name="physicalPerf" value="10" /></td>
                <td><p>Physical</p></td>
              </tr>
              <tr onChange={(e) => this.handlePerformanceChange(e)}>
                <td><input type="radio" name="socialPerf" value="1" /></td>
                <td><input type="radio" name="socialPerf" value="2" /></td>
                <td><input type="radio" name="socialPerf" value="3" /></td>
                <td><input type="radio" name="socialPerf" value="4" /></td>
                <td><input type="radio" name="socialPerf" value="5" /></td>
                <td><input type="radio" name="socialPerf" value="6" /></td>
                <td><input type="radio" name="socialPerf" value="7" /></td>
                <td><input type="radio" name="socialPerf" value="8" /></td>
                <td><input type="radio" name="socialPerf" value="9" /></td>
                <td><input type="radio" name="socialPerf" value="10" /></td>
                <td><p>Social</p></td>
              </tr>
              <tr onChange={(e) => this.handlePerformanceChange(e)}>
                <td><input type="radio" name="spiritualPerf" value="1" /></td>
                <td><input type="radio" name="spiritualPerf" value="2" /></td>
                <td><input type="radio" name="spiritualPerf" value="3" /></td>
                <td><input type="radio" name="spiritualPerf" value="4" /></td>
                <td><input type="radio" name="spiritualPerf" value="5" /></td>
                <td><input type="radio" name="spiritualPerf" value="6" /></td>
                <td><input type="radio" name="spiritualPerf" value="7" /></td>
                <td><input type="radio" name="spiritualPerf" value="8" /></td>
                <td><input type="radio" name="spiritualPerf" value="9" /></td>
                <td><input type="radio" name="spiritualPerf" value="10" /></td>
                <td><p>Spiritual</p></td>
              </tr>
             </tbody>
            </table>
            <button type="button" className="button2">Reevaluate Importance</button>
          </section>
          <section className="gold-square" id="survey-activities">
            <h3>Activities</h3>
            <table>
             <tbody>
              <tr>
                <th>Activity</th>
                <th>Duration</th>
              </tr>
             </tbody>
            </table>
            <button type="button" className="button2" >Add Activity</button>
          </section>
          <input id="survey-submit-button" className="button1" type="submit" value="Submit" onClick={this.handleSubmit} />
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
            <button type="submit" className="button1">Add</button>
            <button type="button" className="button1" >Close</button>
          </form>
        </section>
      </div>
    );
  }
}
