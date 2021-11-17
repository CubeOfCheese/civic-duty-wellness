import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <h2 className="bg-primary text-center text-light mb-5 p-3">Register</h2>
        <div className="w-50 text-center mx-auto">
          <div className="clearfix">
            <div className="p-4 bg-secondary text-white">
              <h3 className="text-center">Please fill in this form to create an account.</h3>
              <form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicZipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="zip code" placeholder="Zip Code" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" placeholder="Phone" />
                </Form.Group>
              </form>
            </div>
          </div>
          <div className="clearfix mt-3">
            <div className="bg-secondary text-center">
              <button type="button" className="text-center btn btn-outline-light my-2">Register</button>
              <p className="text-center">
                Already have an account?
                {' '}
                <NavLink to="/login">Sign in</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegistrationPage;
