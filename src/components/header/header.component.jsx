import React from 'react';

import { auth } from '../../firebase/firebase.util';

import { ReactComponent as Logo } from '../../logo.svg';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './header.style.scss';

const Header = ({ currentUser, ...props }) => {
  // console.log(props);
  /**
   * For the reference, even use mapStateToProps, redux will pass dispatch() as props
   * to component anyways ***AS SOON AS you use connect() to the component
   */
  return (
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
};

const mapStateToProps = ({ user: { currentUser } }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(Header);
