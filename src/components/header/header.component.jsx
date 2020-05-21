import React from 'react';

// Function
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartShow } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

// Component
import { ReactComponent as Logo } from '../../logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Style
import './header.style.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from './header.styles';

const Header = ({ currentUser, show, ...props }) => {
  // console.log(props);
  /**
   * For the reference, even use mapStateToProps, redux will pass dispatch() as props
   * to component anyways ***AS SOON AS you use connect() to the component
   */
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/shop'>Contact</OptionLink>
        <div>
          {currentUser ? (
            <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
          ) : (
            <OptionLink to='/login'>Sign In</OptionLink>
          )}
        </div>
        <CartIcon />
        {show ? <CartDropdown /> : null}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  show: selectCartShow,
});

export default connect(mapStateToProps)(Header);
