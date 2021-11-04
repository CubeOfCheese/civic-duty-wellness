import React, { Component } from 'react';

export default class UserWellnessSurvey extends Component {
  render() {
    return (
      <div>
        <h2 className="bg-primary my-5 text-center text-light">Wellness Survey</h2>
        <form className="text-center">
          <div className="text-center w-75 mx-auto my-5 bg-secondary text-white">
            <h3>Select Date for Survey</h3>
            <input className="mb-3" type="date" />
          </div>
          <div className="my-5 w-75 px-5 mx-auto bg-secondary text-white text-center">
            <h3>Performance</h3>
            <table className="table w-50 mx-auto">
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
                <tr>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="1" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="2" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="3" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="4" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="5" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="6" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="7" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="8" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="9" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-emotional" value="10" /></td>
                  <td style={{ width: '10px' }}><p>Emotional</p></td>
                </tr>
                <tr>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="1" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="2" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="3" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="4" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="5" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="6" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="7" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="8" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="9" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-environmental" value="10" /></td>
                  <td style={{ width: '10px' }}><p>Environmental</p></td>
                </tr>
                <tr>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="1" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="2" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="3" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="4" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="5" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="6" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="7" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="8" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="9" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-financial" value="10" /></td>
                  <td style={{ width: '10px' }}><p>Financial</p></td>
                </tr>
                <tr>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="1" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="2" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="3" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="4" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="5" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="6" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="7" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="8" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="9" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-intellectual" value="10" /></td>
                  <td style={{ width: '10px' }}><p>Intellectual</p></td>
                </tr>
                <tr>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="1" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="2" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="3" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="4" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="5" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="6" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="7" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="8" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="9" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-occupational" value="10" /></td>
                  <td style={{ width: '10px' }}><p>Occupational</p></td>
                </tr>
                <tr>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="1" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="2" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="3" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="4" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="5" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="6" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="7" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="8" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="9" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-physical" value="10" /></td>
                  <td style={{ width: '10px' }}><p>Physical</p></td>
                </tr>
                <tr>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="1" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="2" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="3" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="4" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="5" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="6" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="7" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="8" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="9" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-social" value="10" /></td>
                  <td style={{ width: '10px' }}><p>Social</p></td>
                </tr>
                <tr>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="1" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="2" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="3" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="4" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="5" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="6" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="7" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="8" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="9" /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="performance-spiritual" value="10" /></td>
                  <td style={{ width: '10px' }}><p>Spiritual</p></td>
                </tr>
              </tbody>
            </table>
            <button type="button" className="m-3 btn btn-outline-light">Reevaluate Importance</button>
          </div>
          <input id="survey-submit-button" className="m-3 btn btn-outline-primary" type="submit" value="Submit" />
        </form>
        {/* <form id="survey-activities-popup" action="/action_page.php" className="form-container">
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
            <button type="button" class="btn btn-outline-light" onClick="closeForm()">Close</button> */}
      </div>
    );
  }
}
