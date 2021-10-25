import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <section
          className="gold-square"
          id="register"
          style={{
            width: '30.8%', minHeight: '500px', float: 'left', padding: '5% 0',
          }}
        >
          <h3>Please fill in this form to create an account.</h3>
          <form style={{ padding: '0px 80px' }}>
            <label htmlFor="email" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
              <b style={{ gridColumn: '1/2' }}>Email</b>
              <input type="text" placeholder="Enter Email" name="email" style={{ gridColumn: '2/3' }} required />
            </label>
            <label htmlFor="password" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
              <b style={{ gridColumn: '1/2' }}>Password</b>
              <input type="password" placeholder="Enter Password" name="password" style={{ gridColumn: '2/3' }} required />
            </label>
            <label htmlFor="confirm-password" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
              <b style={{ gridColumn: '1/2' }}>Confirm Password</b>
              <input type="password" placeholder="Confirm Password" name="confirm-password" style={{ gridColumn: '2/3' }} required />
            </label>
            <label htmlFor="zip" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
              <b style={{ gridColumn: '1/2' }}>Zip Code</b>
              <input type="zip" placeholder=" Zip Code" name="zip" style={{ gridColumn: '2/3' }} required />
            </label>
            <label htmlFor="phone-number" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
              <b style={{ gridColumn: '1/2' }}>Phone</b>
              <input type="tel" placeholder="Phone Number" name="phone-number" style={{ gridColumn: '2/3' }} required />
            </label>
          </form>
        </section>
        <section
          className="gold-square"
          id="communities"
          style={{
            width: '30.8%', minHeight: '500px', float: 'right', padding: '5% 0',
          }}
        >
          <h3>My Communities</h3>
          <table style={{ width: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
            <tr><td align="center">Partner 1</td></tr>
            <tr><td align="center">Partner 2</td></tr>
          </table>
          <button type="button" className="button2">Add Community</button>
        </section>
        <section
          className="gold-square"
          id="data"
          style={{
            width: '30.8%', minHeight: '500px', display: 'inline-block', padding: '5% 0',
          }}
        >
          <h3>My Data</h3>
          <form style={{ padding: '0px 80px' }}>
            <label htmlFor="share-all" style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
              <b style={{ gridColumn: '2/3', gridRow: '1' }}>Share all data with Civic Duty and my Partner(s)</b>
              <input type="radio" name="check" id="share-all" style={{ gridColumn: '1/2', gridRow: '1' }} />
            </label>
            <label htmlFor="share" style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
              <b style={{ gridColumn: '2/3', gridRow: '2' }}>Only share data with Civic Duty</b>
              <input type="radio" name="check" id="share" style={{ gridColumn: '1/2', gridRow: '2' }} />
            </label>
            <label htmlFor="begin" style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
              <b style={{ gridColumn: '2/3', gridRow: '3' }}>Begin account without rewards and no data sharing</b>
              <input type="radio" name="check" id="begin" style={{ gridColumn: '1/2', gridRow: '3' }} />
            </label>
            <button type="button" className="button2">Register</button>
            <p>
              Already have an account?
              <NavLink to="/login"> Sign in</NavLink>
            </p>
          </form>
        </section>
      </div>
    );
  }
}
export default RegistrationPage;
