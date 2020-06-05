import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import { googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  initState = {
    email: '',
    password: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ ...this.initState });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleGoogleSignIn = () => {};

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>
          Don't have an account yet? <Link to='/register'>Register</Link>
        </h2>
        <p>Please sign in with email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='text'
            label='Email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton>Sign In</CustomButton>
            <CustomButton
              type='button'
              isGoogleSignIn
              onClick={googleSignInStart}
            >
              Sing in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
