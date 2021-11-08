import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Dashboard from './pages/DashboardPage';
import UserWellnessSurvey from './pages/UserWellnessSurveyPage';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/public/stylesheets/style.scss';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-sm text-primary">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/" style={{ width: '300px' }}>
                  <img style={{ width: '100px' }} src="civicduty-edited.png" alt="civic duty logo" />
                  Civic Duty Wellness
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/survey">Wellness Survey</Link>
                </li>
              </ul>
            </div>
          </nav>
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
