import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Form } from "react-bootstrap";


export class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <div class="row">
        <h2>Register</h2>
        </div>
        <div class="row">
          <div class="col bg-secondary text-white">
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
                  <Form.Control type="phone" placeholder="Phone"/>
                </Form.Group>



                {/* // <label for="email" class="form-label font-weight-bold">Email Address</label>

                //   <input type="text" placeholder="Enter Email" name="email" style={{ gridColumn: '2/3' }} required />
                // <label htmlFor="password" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
                //   <b style={{ gridColumn: '1/2' }}>Password</b>
                //   <input type="password" placeholder="Enter Password" name="password" style={{ gridColumn: '2/3' }} required />
                // </label>
                // <label htmlFor="confirm-password" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
                //   <b style={{ gridColumn: '1/2' }}>Confirm Password</b>
                //   <input type="password" placeholder="Confirm Password" name="confirm-password" style={{ gridColumn: '2/3' }} required />
                // </label>
                // <label htmlFor="zip" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
                //   <b style={{ gridColumn: '1/2' }}>Zip Code</b>
                //   <input type="zip" placeholder=" Zip Code" name="zip" style={{ gridColumn: '2/3' }} required />
                // </label>
                // <label htmlFor="phone-number" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
                //   <b style={{ gridColumn: '1/2' }}>Phone</b>
                //   <input type="tel" placeholder="Phone Number" name="phone-number" style={{ gridColumn: '2/3' }} required />
                // </label> */}
              </form>
          </div>
          <div class="col bg-secondary text-white">
          <form>
                <h3>My Communities</h3>
                <Form.Group className="mb-3" controlId="partnerList">
                </Form.Group>
              {/* // <table style={{ width: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
              //   <tr><td align="center">Partner 1</td></tr>
              //   <tr><td align="center">Partner 2</td></tr>
              // </table> */}
              <button type="button" class="btn btn-outline-light">Add Community</button>
            </form>
          </div>
          <div class="col bg-secondary text-white">
              <h3>My Data</h3>

                <form>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="shareCheck1"/>
                    <label class="form-check-label" for="shareCheck1">
                      Share all data with Civic Duty and my Partner(s)
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="shareCheck2"/>
                    <label class="form-check-label" for="shareCheck2">
                      Only share data with Civic Duty
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="shareCheck3"/>
                    <label class="form-check-label" for="shareCheck3">
                      Begin account without rewards and no data sharing
                    </label>
                  </div>


                  {/* <form style={{ padding: '0px 80px' }}>
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
                    </label> */}
                <button type="button" class="btn btn-outline-light">Register</button>
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
