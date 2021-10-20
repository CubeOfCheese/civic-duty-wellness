import React, { Component } from "react";
import ReactDOM from "react-dom";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
    <nav id="top-nav" className="top-nav">
      <a href="#">Resources</a>
      <a href="#">Marketplace</a>
      <a href="/dashboard" id="logo">
      <img src="civicduty-edited.png"/>
      <h1>Civic Duty Wellness</h1>
      </a>
      <a href="#">Wellness Report</a>
      <a href="/survey">Wellness Survey</a>
     </nav>
   );
  }
}
export default NavBar;
