import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

// Functions
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (event) => {
    // change State by input
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    // do something after submit
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`password do not match`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <div className='sign-up'>
      <h2>
        Already have an account? <Link to='/login'>Log in</Link>
      </h2>
      <p>Please register with email and password</p>
      <form className='form' onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          label='Name'
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          name='email'
          type='email'
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
        <FormInput
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          value={confirmPassword}
          onChange={handleChange}
        />
        <CustomButton>Register</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
