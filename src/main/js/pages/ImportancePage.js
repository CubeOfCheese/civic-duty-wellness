import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';

export default class ImportancePage extends Component {
  constructor() {
    super();
    this.state = {
      importanceInfo: {
        physicalImp: null,
        emotionalImp: null,
        intellectualImp: null,
        socialImp: null,
        spiritualImp: null,
        environmentalImp: null,
        occupationalImp: null,
        financialImp: null,
      },
      complete: false,
    };
    this.handleImportanceChange = this.handleImportanceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const jwt = window.localStorage.getItem('jwt');
    const userId = window.localStorage.getItem('userId');
    const request = {
      method: 'GET',
      headers: ({
        Authorization: `Bearer ${jwt}`,
      }),
    };
    fetch(`/user/${userId}`, request)
      .then((response) => response.json())
      .then((user) => this.setState({
        importanceInfo: {
          physicalImp: user.physicalImp,
          emotionalImp: user.emotionalImp,
          intellectualImp: user.intellectualImp,
          socialImp: user.socialImp,
          spiritualImp: user.spiritualImp,
          environmentalImp: user.environmentalImp,
          occupationalImp: user.occupationalImp,
          financialImp: user.financialImp,
        },
      }));
  }

  handleImportanceChange(event) {
    const { importanceInfo } = this.state;
    const dimension = event.target.name;
    const newImportance = importanceInfo;
    newImportance[dimension] = Number(event.target.value);
    this.setState({
      importanceInfo: newImportance,
    });
  }

  handleSubmit() {
    const userId = window.localStorage.getItem('userId');
    const url = `/user/${userId}/importance/update`;
    const { importanceInfo } = this.state;
    const jwt = window.localStorage.getItem('jwt');
    const request = {
      method: 'POST',
      headers: ({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      }),
      body: JSON.stringify(importanceInfo),
    };
    fetch(url, request)
      .then(() => {
        this.setState({
          complete: true,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  }

  render() {
    const {
      importanceInfo, complete,
    } = this.state;
    const {
      emotionalImp, intellectualImp, socialImp, spiritualImp,
      environmentalImp, occupationalImp, financialImp, physicalImp,
    } = importanceInfo;
    const { authenticated } = this.props;
    if (complete && authenticated) {
      return (<Redirect to="/" />);
    }
    return (
      <div>
        <h2 className="bg-primary text-center text-light mb-5 p-3">Importance</h2>
        <form className="text-center">
          <div className="my-5 w-75 px-5 mx-auto bg-secondary text-white text-right">
            <table className="table w-50 mx-auto text-white">
              <thead>
                <tr>
                  <th style={{ width: '10px' }} scope="col">1</th>
                  <th style={{ width: '10px' }} scope="col">2</th>
                  <th style={{ width: '10px' }} scope="col">3</th>
                  <th style={{ width: '10px' }} scope="col">4</th>
                  <th style={{ width: '10px' }} scope="col">5</th>
                  <th style={{ width: '10px' }} scope="col">6</th>
                  <th style={{ width: '10px' }} scope="col">7</th>
                  <th style={{ width: '10px' }} scope="col">8</th>
                  <th style={{ width: '10px' }} scope="col">9</th>
                  <th style={{ width: '10px' }} scope="col">10</th>
                  <th style={{ width: '10px' }} scope="col">Dimension</th>
                </tr>
              </thead>
              <tbody>
                <tr onChange={(e) => this.handleImportanceChange(e)}>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="1" checked={physicalImp === 1} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="2" checked={physicalImp === 2} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="3" checked={physicalImp === 3} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="4" checked={physicalImp === 4} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="5" checked={physicalImp === 5} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="6" checked={physicalImp === 6} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="7" checked={physicalImp === 7} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="8" checked={physicalImp === 8} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="9" checked={physicalImp === 9} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="physicalImp" value="10" checked={physicalImp === 10} /></td>
                  <td style={{ width: '10px' }}><p>Physical</p></td>
                </tr>
                <tr onChange={(e) => this.handleImportanceChange(e)}>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="1" checked={emotionalImp === 1} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="2" checked={emotionalImp === 2} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="3" checked={emotionalImp === 3} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="4" checked={emotionalImp === 4} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="5" checked={emotionalImp === 5} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="6" checked={emotionalImp === 6} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="7" checked={emotionalImp === 7} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="8" checked={emotionalImp === 8} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="9" checked={emotionalImp === 9} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="emotionalImp" value="10" checked={emotionalImp === 10} /></td>
                  <td style={{ width: '10px' }}><p>Emotional</p></td>
                </tr>
                <tr onChange={(e) => this.handleImportanceChange(e)}>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="1" checked={intellectualImp === 1} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="2" checked={intellectualImp === 2} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="3" checked={intellectualImp === 3} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="4" checked={intellectualImp === 4} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="5" checked={intellectualImp === 5} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="6" checked={intellectualImp === 6} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="7" checked={intellectualImp === 7} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="8" checked={intellectualImp === 8} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="9" checked={intellectualImp === 9} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="intellectualImp" value="10" checked={intellectualImp === 10} /></td>
                  <td style={{ width: '10px' }}><p>Intellectual</p></td>
                </tr>
                <tr onChange={(e) => this.handleImportanceChange(e)}>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="1" checked={socialImp === 1} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="2" checked={socialImp === 2} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="3" checked={socialImp === 3} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="4" checked={socialImp === 4} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="5" checked={socialImp === 5} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="6" checked={socialImp === 6} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="7" checked={socialImp === 7} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="8" checked={socialImp === 8} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="9" checked={socialImp === 9} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="socialImp" value="10" checked={socialImp === 10} /></td>
                  <td style={{ width: '10px' }}><p>Social</p></td>
                </tr>
                <tr onChange={(e) => this.handleImportanceChange(e)}>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="1" checked={spiritualImp === 1} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="2" checked={spiritualImp === 2} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="3" checked={spiritualImp === 3} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="4" checked={spiritualImp === 4} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="5" checked={spiritualImp === 5} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="6" checked={spiritualImp === 6} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="7" checked={spiritualImp === 7} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="8" checked={spiritualImp === 8} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="9" checked={spiritualImp === 9} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="spiritualImp" value="10" checked={spiritualImp === 10} /></td>
                  <td style={{ width: '10px' }}><p>Spiritual</p></td>
                </tr>
                <tr onChange={(e) => this.handleImportanceChange(e)}>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="1" checked={environmentalImp === 1} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="2" checked={environmentalImp === 2} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="3" checked={environmentalImp === 3} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="4" checked={environmentalImp === 4} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="5" checked={environmentalImp === 5} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="6" checked={environmentalImp === 6} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="7" checked={environmentalImp === 7} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="8" checked={environmentalImp === 8} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="9" checked={environmentalImp === 9} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="environmentalImp" value="10" checked={environmentalImp === 10} /></td>
                  <td style={{ width: '10px' }}><p>Environmental</p></td>
                </tr>
                <tr onChange={(e) => this.handleImportanceChange(e)}>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="1" checked={occupationalImp === 1} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="2" checked={occupationalImp === 2} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="3" checked={occupationalImp === 3} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="4" checked={occupationalImp === 4} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="5" checked={occupationalImp === 5} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="6" checked={occupationalImp === 6} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="7" checked={occupationalImp === 7} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="8" checked={occupationalImp === 8} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="9" checked={occupationalImp === 9} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="occupationalImp" value="10" checked={occupationalImp === 10} /></td>
                  <td style={{ width: '10px' }}><p>Occupational</p></td>
                </tr>
                <tr onChange={(e) => this.handleImportanceChange(e)}>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="1" checked={financialImp === 1} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="2" checked={financialImp === 2} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="3" checked={financialImp === 3} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="4" checked={financialImp === 4} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="5" checked={financialImp === 5} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="6" checked={financialImp === 6} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="7" checked={financialImp === 7} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="8" checked={financialImp === 8} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="9" checked={financialImp === 9} /></td>
                  <td style={{ width: '10px' }}><input type="radio" name="financialImp" value="10" checked={financialImp === 10} /></td>
                  <td style={{ width: '10px' }}><p>Financial</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <input id="importance-submit-button" className="m-3 btn btn-outline-primary" type="button" value="Save" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
ImportancePage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};
