import React, { Component } from 'react';
import { Col, Row, Form } from 'react-bootstrap';

export default class UserWellnessSurvey extends Component {
  render() {
    return (
      <div>
        <h2 className="bg-primary my-5 text-center text-light">Wellness Survey</h2>
        <form>
          <div className="my-5 bg-secondary text-white">
            <h3>Select Date for Survey</h3>
            <input type="date" />
          </div>
          <div className="my-5 bg-secondary text-white">
            <h3>Performance</h3>
            <div className="row">
              <p className="col">1</p>
              <p className="col">2</p>
              <p className="col">3</p>
              <p className="col">4</p>
              <p className="col">5</p>
              <p className="col">6</p>
              <p className="col">7</p>
              <p className="col">8</p>
              <p className="col">9</p>
              <p className="col">10</p>
              <p className="col">Dimension</p>
            </div>
            <div className="row">
              <input type="radio" name="performance-emotional" value="1" className="col" />
              <input type="radio" name="performance-emotional" value="2" className="col" />
              <input type="radio" name="performance-emotional" value="3" className="col" />
              <input type="radio" name="performance-emotional" value="4" className="col" />
              <input type="radio" name="performance-emotional" value="5" className="col" />
              <input type="radio" name="performance-emotional" value="6" className="col" />
              <input type="radio" name="performance-emotional" value="7" className="col" />
              <input type="radio" name="performance-emotional" value="8" className="col" />
              <input type="radio" name="performance-emotional" value="9" className="col" />
              <input type="radio" name="performance-emotional" value="10" className="col" />
              <p className="col">Emotional</p>
            </div>
            <div className="row">
              <input type="radio" name="performance-environmental" value="1" className="col" />
              <input type="radio" name="performance-environmental" value="2" className="col" />
              <input type="radio" name="performance-environmental" value="3" className="col" />
              <input type="radio" name="performance-environmental" value="4" className="col" />
              <input type="radio" name="performance-environmental" value="5" className="col" />
              <input type="radio" name="performance-environmental" value="6" className="col" />
              <input type="radio" name="performance-environmental" value="7" className="col" />
              <input type="radio" name="performance-environmental" value="8" className="col" />
              <input type="radio" name="performance-environmental" value="9" className="col" />
              <input type="radio" name="performance-environmental" value="10" className="col" />
              <p className="col">Environmental</p>
            </div>
            <div className="row">
              <input type="radio" name="performance-financial" value="1" className="col" />
              <input type="radio" name="performance-financial" value="2" className="col" />
              <input type="radio" name="performance-financial" value="3" className="col" />
              <input type="radio" name="performance-financial" value="4" className="col" />
              <input type="radio" name="performance-financial" value="5" className="col" />
              <input type="radio" name="performance-financial" value="6" className="col" />
              <input type="radio" name="performance-financial" value="7" className="col" />
              <input type="radio" name="performance-financial" value="8" className="col" />
              <input type="radio" name="performance-financial" value="9" className="col" />
              <input type="radio" name="performance-financial" value="10" className="col" />
              <p className="col">Financial</p>
            </div>
            <div className="row">
              <input type="radio" name="performance-intellectual" value="1" className="col" />
              <input type="radio" name="performance-intellectual" value="2" className="col" />
              <input type="radio" name="performance-intellectual" value="3" className="col" />
              <input type="radio" name="performance-intellectual" value="4" className="col" />
              <input type="radio" name="performance-intellectual" value="5" className="col" />
              <input type="radio" name="performance-intellectual" value="6" className="col" />
              <input type="radio" name="performance-intellectual" value="7" className="col" />
              <input type="radio" name="performance-intellectual" value="8" className="col" />
              <input type="radio" name="performance-intellectual" value="9" className="col" />
              <input type="radio" name="performance-intellectual" value="10" className="col" />
              <p className="col">Intellectual</p>
            </div>
            <div className="row">
              <input type="radio" name="performance-occupational" value="1" className="col" />
              <input type="radio" name="performance-occupational" value="2" className="col" />
              <input type="radio" name="performance-occupational" value="3" className="col" />
              <input type="radio" name="performance-occupational" value="4" className="col" />
              <input type="radio" name="performance-occupational" value="5" className="col" />
              <input type="radio" name="performance-occupational" value="6" className="col" />
              <input type="radio" name="performance-occupational" value="7" className="col" />
              <input type="radio" name="performance-occupational" value="8" className="col" />
              <input type="radio" name="performance-occupational" value="9" className="col" />
              <input type="radio" name="performance-occupational" value="10" className="col" />
              <p className="col">Occupational</p>
            </div>
            <div className="row">
              <input type="radio" name="performance-physcial" value="1" className="col" />
              <input type="radio" name="performance-physcial" value="2" className="col" />
              <input type="radio" name="performance-physcial" value="3" className="col" />
              <input type="radio" name="performance-physcial" value="4" className="col" />
              <input type="radio" name="performance-physcial" value="5" className="col" />
              <input type="radio" name="performance-physcial" value="6" className="col" />
              <input type="radio" name="performance-physcial" value="7" className="col" />
              <input type="radio" name="performance-physcial" value="8" className="col" />
              <input type="radio" name="performance-physcial" value="9" className="col" />
              <input type="radio" name="performance-physcial" value="10" className="col" />
              <p className="col">Physical</p>
            </div>
            <div className="row">
              <input type="radio" name="performance-social" value="1" className="col" />
              <input type="radio" name="performance-social" value="2" className="col" />
              <input type="radio" name="performance-social" value="3" className="col" />
              <input type="radio" name="performance-social" value="4" className="col" />
              <input type="radio" name="performance-social" value="5" className="col" />
              <input type="radio" name="performance-social" value="6" className="col" />
              <input type="radio" name="performance-social" value="7" className="col" />
              <input type="radio" name="performance-social" value="8" className="col" />
              <input type="radio" name="performance-social" value="9" className="col" />
              <input type="radio" name="performance-social" value="10" className="col" />
              <p className="col">Social</p>
            </div>
            <div className="row">
              <input type="radio" name="performance-spiritual" value="1" className="col" />
              <input type="radio" name="performance-spiritual" value="2" className="col" />
              <input type="radio" name="performance-spiritual" value="3" className="col" />
              <input type="radio" name="performance-spiritual" value="4" className="col" />
              <input type="radio" name="performance-spiritual" value="5" className="col" />
              <input type="radio" name="performance-spiritual" value="6" className="col" />
              <input type="radio" name="performance-spiritual" value="7" className="col" />
              <input type="radio" name="performance-spiritual" value="8" className="col" />
              <input type="radio" name="performance-spiritual" value="9" className="col" />
              <input type="radio" name="performance-spiritual" value="10" className="col" />
              <p className="col">Spiritual</p>
            </div>
            <button type="button" className="btn btn-outline-light">Reevaluate Importance</button>
          </div>
          {/* <div class="col bg-secondary text-white">
            <h3>Activities</h3>
              <div class="row">
                <p class="col">Activity</p>
                <p class="col">Duration</p>
              </div>
            <button type="button" class="btn btn-outline-light" onClick="openForm()">Add Activity</button>
          </div>
          <input id="survey-submit-button" class="btn btn-outline-light" type="submit" value="Submit" />
        </form>
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
            <button type="button" class="btn btn-outline-light" onClick="closeForm()">Close</button> */}
        </form>
      </div>
    );
  }
}
