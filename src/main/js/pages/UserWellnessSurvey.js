import React, { Component } from "react";
import ReactDOM from "react-dom";

export class UserWellnessSurvey extends Component {
  constructor(props) {
    super(props);
    }
    render() {
      return (
        <div>
          <section class="transparent" id="survey">
            <h2>Wellness Survey</h2>
            <section class="gold-square" id="survey-date">
              <h3>Select Date for Survey</h3>
              <input type="date"/>
           </section>
           <section class="gold-square" id="survey-performance">
            <h3>Performance</h3>
            <table>
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
                <tr>
                  <td><input type="radio" name="performance-emotional" value="1"/></td>
                  <td><input type="radio" name="performance-emotional" value="2"/></td>
                  <td><input type="radio" name="performance-emotional" value="3"/></td>
                  <td><input type="radio" name="performance-emotional" value="4"/></td>
                  <td><input type="radio" name="performance-emotional" value="5"/></td>
                  <td><input type="radio" name="performance-emotional" value="6"/></td>
                  <td><input type="radio" name="performance-emotional" value="7"/></td>
                  <td><input type="radio" name="performance-emotional" value="8"/></td>
                  <td><input type="radio" name="performance-emotional" value="9"/></td>
                  <td><input type="radio" name="performance-emotional" value="10"/></td>
                  <td><p>Emotional</p></td>
                </tr>
                <tr>
                  <td><input type="radio" name="performance-environmental" value="1"/></td>
                  <td><input type="radio" name="performance-environmental" value="2"/></td>
                  <td><input type="radio" name="performance-environmental" value="3"/></td>
                  <td><input type="radio" name="performance-environmental" value="4"/></td>
                  <td><input type="radio" name="performance-environmental" value="5"/></td>
                  <td><input type="radio" name="performance-environmental" value="6"/></td>
                  <td><input type="radio" name="performance-environmental" value="7"/></td>
                  <td><input type="radio" name="performance-environmental" value="8"/></td>
                  <td><input type="radio" name="performance-environmental" value="9"/></td>
                  <td><input type="radio" name="performance-environmental" value="10"/></td>
                  <td><p>Environmental</p></td>
                </tr>
                <tr>
                  <td><input type="radio" name="performance-financial" value="1"/></td>
                  <td><input type="radio" name="performance-financial" value="2"/></td>
                  <td><input type="radio" name="performance-financial" value="3"/></td>
                  <td><input type="radio" name="performance-financial" value="4"/></td>
                  <td><input type="radio" name="performance-financial" value="5"/></td>
                  <td><input type="radio" name="performance-financial" value="6"/></td>
                  <td><input type="radio" name="performance-financial" value="7"/></td>
                  <td><input type="radio" name="performance-financial" value="8"/></td>
                  <td><input type="radio" name="performance-financial" value="9"/></td>
                  <td><input type="radio" name="performance-financial" value="10"/></td>
                  <td><p>Financial</p></td>
                </tr>
                <tr>
                  <td><input type="radio" name="performance-intellectual" value="1"/></td>
                  <td><input type="radio" name="performance-intellectual" value="2"/></td>
                  <td><input type="radio" name="performance-intellectual" value="3"/></td>
                  <td><input type="radio" name="performance-intellectual" value="4"/></td>
                  <td><input type="radio" name="performance-intellectual" value="5"/></td>
                  <td><input type="radio" name="performance-intellectual" value="6"/></td>
                  <td><input type="radio" name="performance-intellectual" value="7"/></td>
                  <td><input type="radio" name="performance-intellectual" value="8"/></td>
                  <td><input type="radio" name="performance-intellectual" value="9"/></td>
                  <td><input type="radio" name="performance-intellectual" value="10"/></td>
                  <td><p>Intellectual</p></td>
                </tr>
                <tr>
                  <td><input type="radio" name="performance-occupational" value="1"/></td>
                  <td><input type="radio" name="performance-occupational" value="2"/></td>
                  <td><input type="radio" name="performance-occupational" value="3"/></td>
                  <td><input type="radio" name="performance-occupational" value="4"/></td>
                  <td><input type="radio" name="performance-occupational" value="5"/></td>
                  <td><input type="radio" name="performance-occupational" value="6"/></td>
                  <td><input type="radio" name="performance-occupational" value="7"/></td>
                  <td><input type="radio" name="performance-occupational" value="8"/></td>
                  <td><input type="radio" name="performance-occupational" value="9"/></td>
                  <td><input type="radio" name="performance-occupational" value="10"/></td>
                  <td><p>Occupational</p></td>
                </tr>
                <tr>
                  <td><input type="radio" name="performance-physcial" value="1"/></td>
                  <td><input type="radio" name="performance-physcial" value="2"/></td>
                  <td><input type="radio" name="performance-physcial" value="3"/></td>
                  <td><input type="radio" name="performance-physcial" value="4"/></td>
                  <td><input type="radio" name="performance-physcial" value="5"/></td>
                  <td><input type="radio" name="performance-physcial" value="6"/></td>
                  <td><input type="radio" name="performance-physcial" value="7"/></td>
                  <td><input type="radio" name="performance-physcial" value="8"/></td>
                  <td><input type="radio" name="performance-physcial" value="9"/></td>
                  <td><input type="radio" name="performance-physcial" value="10"/></td>
                  <td><p>Physical</p></td>
                </tr>
                <tr>
                  <td><input type="radio" name="performance-social" value="1"/></td>
                  <td><input type="radio" name="performance-social" value="2"/></td>
                  <td><input type="radio" name="performance-social" value="3"/></td>
                  <td><input type="radio" name="performance-social" value="4"/></td>
                  <td><input type="radio" name="performance-social" value="5"/></td>
                  <td><input type="radio" name="performance-social" value="6"/></td>
                  <td><input type="radio" name="performance-social" value="7"/></td>
                  <td><input type="radio" name="performance-social" value="8"/></td>
                  <td><input type="radio" name="performance-social" value="9"/></td>
                  <td><input type="radio" name="performance-social" value="10"/></td>
                  <td><p>Social</p></td>
                </tr>
                <tr>
                  <td><input type="radio" name="performance-spiritual" value="1"/></td>
                  <td><input type="radio" name="performance-spiritual" value="2"/></td>
                  <td><input type="radio" name="performance-spiritual" value="3"/></td>
                  <td><input type="radio" name="performance-spiritual" value="4"/></td>
                  <td><input type="radio" name="performance-spiritual" value="5"/></td>
                  <td><input type="radio" name="performance-spiritual" value="6"/></td>
                  <td><input type="radio" name="performance-spiritual" value="7"/></td>
                  <td><input type="radio" name="performance-spiritual" value="8"/></td>
                  <td><input type="radio" name="performance-spiritual" value="9"/></td>
                  <td><input type="radio" name="performance-spiritual" value="10"/></td>
                  <td><p>Spiritual</p></td>
                </tr>
              </table>
              <button class="button2">Reevaluate Importance</button>
            </section>
            <section class="gold-square" id="survey-activities">
              <h3>Activities</h3>
              <table>
                <tr>
                  <th>Activity</th>
                  <th>Duration</th>
                </tr>
              </table>
              <button class="button2" onclick="openForm()">Add Activity</button>
            </section>
            <input id="survey-submit-button" class="button1" type="submit" value="Submit"/>
            <form id="survey-activities-popup" action="/action_page.php" class="form-container">
              <h1>Add Activity</h1>
              <label for="activity"><b>Activity</b></label>
              <input type="text" placeholder="Activity Name" name="activity"/>
              <label for="Duration"><b>Duration</b></label>
              <input type="time" name="duration"/>
              <button type="submit" class ="button1">Add</button>
              <button type="button" class ="button1" onclick="closeForm()">Close</button>
            </form>
          </section>
        </div>
    );
  }
}
export default UserWellnessSurvey;
