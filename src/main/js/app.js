import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Dashboard from './pages/DashboardPage';
import UserWellnessSurvey from './pages/UserWellnessSurveyPage';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import '../resources/public/stylesheets/style.scss';
import 'bootstrap';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav id="top-nav" className="top-nav">
            <Link to="/login">Login</Link>
            <Link to="/" id="logo">
              <img src="civicduty-edited.png" alt="civic duty logo" />
              <h1>Civic Duty Wellness</h1>
            </Link>
            <Link to="/survey">Wellness Survey</Link>
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
