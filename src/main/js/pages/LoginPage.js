import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <section className="gold-square" id="login-section" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
          <form style={{
            width: '300px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '20px',
          }}
          >
            <label htmlFor="user" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
              <b style={{ gridColumn: '1/2' }}>Username</b>
              <input type="text" maxLength="25" placeholder="Enter Username" name="user" style={{ gridColumn: '2/3' }} required />
            </label>
            <label htmlFor="pswd" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
              <b style={{ gridColumn: '1/2' }}>Password</b>
              <input type="password" maxLength="25" placeholder="Enter Password" name="pswd" style={{ gridColumn: '2/3' }} required />
            </label>
            <button type="submit" className="button2">Login</button>
            <button type="button" className="button2">Cancel</button>
            <br />
            <p>
              Don&apos;t have an account?
              <NavLink to="/registration"> Sign Up</NavLink>
            </p>
          </form>
        </section>
      </div>
    );
  }
}
