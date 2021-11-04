import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <h2 className="bg-primary my-5 text-center text-light">Register</h2>

        <div className="row">
          <div className="mx-5 col bg-secondary text-white">
            <h3>Please fill in this form to create an account.</h3>
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
          <div className="mx-5 col bg-secondary text-white">
            <form>
              <h3>My Communities</h3>
              <Form.Group className="mb-3" controlId="partnerList" />
              <button type="button" className="btn btn-outline-light">Add Community</button>
            </form>
          </div>
          <div className="mx-5 col bg-secondary text-white">
            <h3>My Data</h3>
            <form>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="shareCheck1" />
                <label className="form-check-label" htmlFor="shareCheck1">
                  Share all data with Civic Duty and my Partner(s)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="shareCheck2" />
                <label className="form-check-label" htmlFor="shareCheck2">
                  Only share data with Civic Duty
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="shareCheck3" />
                <label className="form-check-label" htmlFor="shareCheck3">
                  Begin account without rewards and no data sharing
                </label>
              </div>
              <button type="button" className="btn btn-outline-light">Register</button>
              <p>
                Already have an account?
                <NavLink to="/login"> Sign in</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default RegistrationPage;
