import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Dashboard from './pages/DashboardPage';
import UserWellnessSurvey from './pages/UserWellnessSurveyPage';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import ImportancePage from './pages/ImportancePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/public/stylesheets/style.scss';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
    };
    this.changeAuth = this.changeAuth.bind(this);
  }

  changeAuth() {
    const { authenticated } = this.state;
    this.setState({ authenticated: !authenticated });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-sm text-primary">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand row" to="/">
                  <img className="col" style={{ width: '100px' }} src="civicduty-edited.png" alt="civic duty logo" />
                  <div className="col align-self-center">
                    <p className="h3">Civic Duty</p>
                    <p>Wellness for the People</p>
                  </div>
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/survey">Wellness Survey</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              {authenticated ? <Dashboard />
                : <Login changeAuth={this.changeAuth} authenticated={authenticated} />}
            </Route>
            <Route path="/survey">
              {authenticated ? <UserWellnessSurvey />
                : <Login changeAuth={this.changeAuth} authenticated={authenticated} />}
            </Route>
            <Route path="/login">
              <Login changeAuth={this.changeAuth} authenticated={authenticated} />
            </Route>
            <Route path="/registration">
              <Registration changeAuth={this.changeAuth} authenticated={authenticated} />
            </Route>
            <Route path="/importance">
              {authenticated ? <ImportancePage authenticated={authenticated} />
                : <Login changeAuth={this.changeAuth} authenticated={authenticated} />}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.querySelector('#app'));
