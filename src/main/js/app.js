import React, { Component } from "react";
import ReactDOM from "react-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserWellnessSurvey from "./pages/UserWellnessSurvey";

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <Router>
          <nav id="top-nav" className="top-nav">
            <Link to="#">Resources</Link>
            <Link to="#">Marketplace</Link>
            <Link to="/dashboard" id="logo">
            <img src="civicduty-edited.png"/>
            <h1>Civic Duty Wellness</h1>
            </Link>
            <Link to="#">Wellness Report</Link>
            <Link to="/survey">Wellness Survey</Link>
           </nav>
            <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/Resources' component={null} />
              <Route path='/Marketplace' component={null} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/WellnessReport' component={null} />
              <Route path='/survey' component={UserWellnessSurvey} />
            </Switch>
         </Router>
        </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.querySelector("#app"));
