import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

export default class Dashboard extends Component {
  render() {
    const data = {
      labels: ['Emotional', 'Spiritual', 'Intellectual', 'Physical', 'Environmental', 'Financial', 'Occupational', 'Social'],
      datasets: [{
        label: 'My Wellness',
        backgroundColor: 'rgba(0,75,58,0.2)',
        borderColor: 'rgba(0,75,58,0.5)',
        data: [6, 8, 5, 7, 4, 3, 4, 9],
      }],
    };
    const options = {
      responsive: true,
      scale: {
        min: 1,
        max: 10,
        pointLabels: {
          font: {
            size: 16,
          },
        },
        ticks: {
          backdropColor: 'rgba(242,241,240,0.2)',
        },
      },
    };
    return (
      <div>
        <h2>Profile</h2>
        <div style={{ height: '600px', width: '600px', paddingLeft: '115px' }}>
          <Radar data={data} options={options} />
        </div>
      </div>
    );
  }
}
