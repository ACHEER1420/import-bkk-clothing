import React from 'react';

import { ReactComponent as Logo } from '../../logo.svg';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => (
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
      <Link to='/auth' className='option'>
        Log in
      </Link>
    </div>
  </div>
);

export default Header;
