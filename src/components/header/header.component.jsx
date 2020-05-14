import React from 'react';

import { auth } from '../../firebase/firebase.util';

import { ReactComponent as Logo } from '../../logo.svg';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        Shop
      </Link>
      <Link to='/shop' className='option'>
        Contact
      </Link>
      <div>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='option' to='/login'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default Header;
