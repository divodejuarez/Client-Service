import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUp = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        //Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }
  
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordTwo === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            className="form-control"
            name="username"
            value={ username }
            onChange={ this.onChange }
            type="text"
            placeholder="Full Name"
          />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            className="form-control"
            name="email"
            value={ email }
            onChange={ this.onChange }
            type="email"
            placeholder="Email Address"
          />
      </div>
      <div className="form-group">
        <label htmlFor="email">Password</label>
        <input
          id="passwordOne"
          className="form-control"
          name="passwordOne"
          value={ passwordOne }
          onChange={ this.onChange }
          type="password"
          placeholder="Password"
        />
        <label htmlFor="email">Confirm Password</label>
        <input
          id="passwordTwo"
          className="form-control"
          name="passwordTwo"
          value={ passwordTwo }
          onChange={ this.onChange }
          type="password"
          placeholder="Confirm Password"
        />
      </div>
        <button disabled={ isInvalid } type="submit" className="btn btn-primary">Sign Up</button>
        { error && <p>{ error.message }</p> }
      </form>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ ROUTES.SIGN_UP }>Sign Up</Link>
  </p>
);

export default SignUp;
export { SignUpForm, SignUpLink };