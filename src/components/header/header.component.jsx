import React from 'react';

// Function
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';

// Component
import { ReactComponent as Logo } from '../../logo.svg';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Style
import './header.style.scss';

const Header = ({ currentUser, show, ...props }) => {
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
        <CartIcon />
        {show ? <CartDropdown /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { show } }) => {
  return { currentUser, show };
};

export default connect(mapStateToProps)(Header);
