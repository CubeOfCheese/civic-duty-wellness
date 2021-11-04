import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h2 className="bg-primary my-5 text-center text-light">Login</h2>
        <div className="w-50 p-3 bg-secondary text-white text-center mx-auto">
          <form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <button type="button" className="btn btn-outline-light">Login</button>
            <button type="button" className="btn btn-outline-light">Cancel</button>
            <br />
            <p>
              Don&apos;t have an account?
              <NavLink to="/registration"> Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
