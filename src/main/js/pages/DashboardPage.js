import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      physical: null,
      emotional: null,
      intellectual: null,
      social: null,
      spiritual: null,
      environmental: null,
      occupational: null,
      financial: null,
    };
  }

  componentDidMount() {
    // retrieve performance data from dummy backend route
    fetch('/user/1/wellness-report')
      .then((response) => response.json())
      .then((obj) => this.setState({
        physical: obj.physical,
        emotional: obj.emotional,
        intellectual: obj.intellectual,
        social: obj.social,
        spiritual: obj.spiritual,
        environmental: obj.environmental,
        occupational: obj.occupational,
        financial: obj.financial,
      }));
  }

  render() {
    const {
      physical, emotional, intellectual, social, spiritual, environmental, occupational, financial,
    } = this.state;
    const data = {
      labels: ['Physical', 'Emotional', 'Intellectual', 'Social', 'Spiritual', 'Environmental', 'Occupational', 'Financial'],
      datasets: [{
        label: 'My Wellness',
        backgroundColor: 'rgba(0,75,58,0.2)',
        borderColor: 'rgba(0,75,58,0.5)',
        data: [
          physical,
          emotional,
          intellectual,
          social,
          spiritual,
          environmental,
          occupational,
          financial],
      }],
    };
    const options = {
      responsive: true,
      scale: {
        min: 0,
        max: 10,
        pointLabels: {
          font: {
            size: 16,
          },
        },
        ticks: {
          backdropColor: 'rgba(0,0,0,0)',
        },
      },
    };
    return (
      <div>
        <h2 className="bg-primary text-center text-light mb-5 p-3">Profile</h2>
        <div className="bg-secondary p-5 mx-auto my-5 w-75">
          <div className="bg-light" style={{ height: '600px', width: '600px', paddingLeft: '115px' }}>
            <Radar data={data} options={options} />
          </div>
        </div>
      </div>
    );
  }
}
