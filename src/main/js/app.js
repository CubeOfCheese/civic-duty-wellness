import React, { Component } from "react";
import ReactDOM from "react-dom";


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasResponded: false,
      feelingGood: null,
    };
  }

  updateFeeling(feeling) {
    this.setState({feelingGood: feeling, hasResponded: true });
  }

  render() {
    const { hasResponded, feelingGood } = this.state;
    const feelingResponse = <div>
        {feelingGood === true
          ? <p>Yay</p>
          : <p>I'm sorry</p>
        }
      </div>

    return (
        <div>
          <nav id="top-nav" className="top-nav">
            <a href="#">About Us</a>
            <a href="#">Resources</a>
            <a href="#">Marketplace</a>
            <a href="/" id="logo">
            <img src="civicduty-edited.png"/>
            <h1>Civic Duty Wellness</h1>
            </a>
            <a href="#">Wellness Report</a>
            <a href="/survey">Wellness Survey</a>
            <a href="/dashboard">Profile</a>
            {/* Settings should be linked from profile
            <a href="#">Settings</a> */}
          </nav>
          <section className="green-square">
            <h2> How are you feeling today?</h2>
            <p>Take a second to think to yourself:</p>
            <p><i>How am I doing today?</i></p>
            <p>Now think about why you feel that way. What do you want to do about that? See you tomorrow.</p>

            <button className="button1" onClick={() => this.updateFeeling(true)}>I'm feeling good</button>
            <button className="button1" onClick={() => this.updateFeeling(false)}>I'm feeling bad</button>
            {hasResponded ? feelingResponse : null}
          </section>
        </div>
      );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));
