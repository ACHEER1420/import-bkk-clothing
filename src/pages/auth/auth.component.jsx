import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './auth.styles.scss';

const Auth = ({ match }) => {
  return (
    <div className='auth-page'>
      {match.url === '/login' ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default Auth;
