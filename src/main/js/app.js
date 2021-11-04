import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Col, Row, Form } from 'react-bootstrap';
import Dashboard from './pages/DashboardPage';
import UserWellnessSurvey from './pages/UserWellnessSurveyPage';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul className="align-items-center nav bg-primary text-white justify-content-center">
            <li className="nav-item d-flex align-middle px-5">
              <Link className="text-light" to="/login">Login</Link>
            </li>
            <li className="text-center navbar-brand nav-item px-5">
              <Link className="text-light" to="/" style={{ width: '300px' }}>
                <img style={{ width: '100px' }} src="civicduty-edited.png" alt="civic duty logo" />
                <h1>Civic Duty Wellness</h1>
              </Link>
            </li>
            <li className="nav-item d-flex align-middle px-5">
              <Link className="text-light" to="/survey">Wellness Survey</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/survey" component={UserWellnessSurvey} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.querySelector('#app'));
