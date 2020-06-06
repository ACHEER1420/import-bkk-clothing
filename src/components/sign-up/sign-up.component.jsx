import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

// Functions
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  initstate = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    // change State by input
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    // do something after submit
    event.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`password do not match`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  render() {
    return (
      <div className='sign-up'>
        <h2>
          Already have an account? <Link to='/login'>Log in</Link>
        </h2>
        <p>Please register with email and password</p>
        <form className='form' onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            label='Name'
            value={this.state.displayName}
            onChange={this.handleChange}
          />
          <FormInput
            name='email'
            type='email'
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
          <FormInput
            name='confirmPassword'
            type='password'
            label='Confirm Password'
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <CustomButton>Register</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
