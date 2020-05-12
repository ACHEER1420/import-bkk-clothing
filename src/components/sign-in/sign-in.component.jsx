import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = () => {
    console.log(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleGoogleSignIn = () => {};

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account?</h2>
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
              isGoogleSignIn={true}
              onClick={this.handleGoogleSignIn}
            >
              Sing in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
