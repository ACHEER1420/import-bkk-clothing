import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>
        Don't have an account yet? <Link to='/register'>Register</Link>
      </h2>
      <p>Please sign in with email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='text'
          label='Email'
          value={email}
          onChange={handleChange}
        />
        <FormInput
          name='password'
          type='password'
          label='Password'
          value={password}
          onChange={handleChange}
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
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
