import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './pages/User';
import Reports from './pages/Reports';
import Wellness from './pages/Wellness';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={User} />
          <Route path='/reports' component={Reports} />
          <Route path='/Wellness' component={Wellness} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
