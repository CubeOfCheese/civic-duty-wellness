import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { PropTypes } from 'prop-types';

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      invalid: false,
      loginInfo: {
        email: '',
        password: '',
      },
    };
    this.handleEntryChange = this.handleEntryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEntryChange(event) {
    const { loginInfo } = this.state;
    const entry = event.target.name;
    const newEntry = loginInfo;
    newEntry[entry] = String(event.target.value);
    this.setState({
      loginInfo: newEntry,
    });
  }

  handleSubmit() {
    const { changeAuth } = this.props;
    const url = '/login/attempt';
    const { loginInfo } = this.state;
    const request = {
      method: 'POST',
      headers: ({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(loginInfo),
    };
    fetch(url, request)
      .then((response) => {
        if (response.ok) {
          changeAuth();
        } else if (!response.ok) {
          this.setState({
            invalid: true,
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const { invalid } = this.state;
    const { authenticated } = this.props;
    if (authenticated) {
      return (<Redirect to="/" />);
    }
    return (
      <div>
        <h2 className="bg-primary text-center text-light mb-5 p-3">Login</h2>
        <div className="w-50 p-3 bg-secondary text-white text-center mx-auto">
          <form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" name="email" onChange={(e) => this.handleEntryChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => this.handleEntryChange(e)} />
            </Form.Group>
            {invalid ? (
              <div className="alert alert-danger" role="alert">
                Invalid Username and/or Password
              </div>
            )
              : null}
            <button type="button" className="btn btn-outline-light mx-3" onClick={this.handleSubmit}>Login</button>
            <br />
            <p>
              Don&apos;t have an account?
              {' '}
              <NavLink to="/registration">Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
LoginPage.propTypes = {
  changeAuth: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};
