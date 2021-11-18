import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { PropTypes } from 'prop-types';

export class RegistrationPage extends Component {
  constructor() {
    super();
    this.state = {
      complete: false,
      missing: false,
      invalid: false,
      registerInfo: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone: null,
        zip: null,
        dob: '',
        gender: '',
        ethnicity: '',
        emotionalImp: 5,
        intellectualImp: 5,
        socialImp: 5,
        spiritualImp: 5,
        environmentalImp: 5,
        occupationalImp: 5,
        financialImp: 5,
        physicalImp: 5,
      },
      confirmPassword: '',
      passwordMismatch: false,
    };
    this.handleTextEntryChange = this.handleTextEntryChange.bind(this);
    this.handleNumEntryChange = this.handleNumEntryChange.bind(this);
    this.handleDateEntryChange = this.handleDateEntryChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.comparePasswords = this.comparePasswords.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextEntryChange(event) {
    const { registerInfo } = this.state;
    const entry = event.target.name;
    const newEntry = registerInfo;
    newEntry[entry] = String(event.target.value);
    this.setState({
      registerInfo: newEntry,
    });
    if (event.target.name === 'password') {
      this.comparePasswords();
    }
  }

  handleNumEntryChange(event) {
    const { registerInfo } = this.state;
    const entry = event.target.name;
    const newEntry = registerInfo;
    newEntry[entry] = Number(event.target.value);
    this.setState({
      registerInfo: newEntry,
    });
  }

  handleDateEntryChange(event) {
    const { registerInfo } = this.state;
    const newEntry = registerInfo;
    newEntry.dob = event.target.value;
    this.setState({
      registerInfo: newEntry,
    });
  }

  handleConfirmPasswordChange(event) {
    this.setState({
      confirmPassword: event.target.value,
    });
    this.comparePasswords();
  }

  handleSubmit() {
    const { changeAuth } = this.props;
    const {
      registerInfo, passwordMismatch,
    } = this.state;
    const {
      fname, lname, email, password,
    } = registerInfo;
    if (fname === '' || lname === '' || email === '' || password === '') {
      this.setState({
        missing: true,
      });
      return;
    }
    this.setState({
      missing: false,
    });
    if (!passwordMismatch) {
      const url = '/registration/attempt';
      const request = {
        method: 'POST',
        headers: ({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(registerInfo),
      };
      fetch(url, request)
        .then((response) => {
          if (response.ok) {
            this.setState({
              complete: true,
              invalid: false,
            });
            changeAuth();
            return;
          }
          this.setState({
            invalid: true,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error:', error);
        });
    }
  }

  comparePasswords() {
    const {
      registerInfo, confirmPassword,
    } = this.state;
    const { password } = registerInfo;
    if (password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        this.setState({
          passwordMismatch: false,
        });
      } else {
        this.setState({
          passwordMismatch: true,
        });
      }
    }
  }

  render() {
    const {
      complete, missing, invalid, passwordMismatch,
    } = this.state;
    const { authenticated } = this.props;
    if (complete && authenticated) {
      return (<Redirect to="/" />);
    }
    return (
      <div>
        <h2 className="bg-primary text-center text-light mb-5 p-3">Register</h2>
        <div className="w-50 text-center mx-auto">
          <div className="clearfix">
            <div className="p-4 bg-secondary text-white">
              <h3 className="text-center">Please fill in this form to create an account.</h3>
              <form>
                <Form.Group className="mb-3" controlId="formBasicFname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="fname"
                    placeholder="First Name"
                    name="fname"
                    onChange={(e) => this.handleTextEntryChange(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="lname"
                    placeholder="Last Name"
                    name="lname"
                    onChange={(e) => this.handleTextEntryChange(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => this.handleTextEntryChange(e)}
                  />
                </Form.Group>
                {invalid ? (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    An Account Already Exists using that Email
                  </div>
                )
                  : null}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onBlur={(e) => this.handleTextEntryChange(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => this.handleConfirmPasswordChange(e)}
                    onBlur={(e) => this.handleConfirmPasswordChange(e)}
                  />
                </Form.Group>
                {passwordMismatch ? (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Passwords Do Not Match
                  </div>
                )
                  : null}

                <Form.Group className="mb-3" controlId="formBasicZipCode">
                  <Form.Label>Zip Code (optional)</Form.Label>
                  <Form.Control
                    type="zip code"
                    placeholder="Zip Code"
                    name="zip"
                    onChange={(e) => this.handleNumEntryChange(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <Form.Label>Phone (optional)</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    onChange={(e) => this.handleNumEntryChange(e)}
                  />
                </Form.Group>
              </form>
            </div>
          </div>
          <div className="clearfix mt-3">
            <div className="bg-secondary text-center">
              {missing ? (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  One or More Required Fields are Missing
                </div>
              )
                : null}
              <button
                type="button"
                className="text-center btn btn-outline-light my-2"
                onClick={this.handleSubmit}
              >
                Register
              </button>
              <p className="text-center">
                Already have an account?
                {' '}
                <NavLink to="/login">Sign in</NavLink>
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 px-5">
          <div className="bg-secondary text-center p-4">
            <button type="button" className="text-center btn btn-outline-light w-25 mx-auto my-5">Register</button>
            <p className="text-center">
              Already have an account?
              <NavLink to="/login"> Sign in</NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default RegistrationPage;
RegistrationPage.propTypes = {
  changeAuth: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};
