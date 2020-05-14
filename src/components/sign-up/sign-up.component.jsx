import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

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

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`password do not match`);
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        ...this.initstate,
      });
    } catch (error) {
      console.log(error);
    }
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

export default SignUp;
