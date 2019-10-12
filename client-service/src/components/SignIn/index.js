import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignIn = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
  </div>
);

class SignInForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {

  }
  
  onChange = event => {

  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
      </form>
    );
  }
}

const SignInLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignIn;
export { SignInForm, SignInLink };