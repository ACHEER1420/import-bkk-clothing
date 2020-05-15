import React from 'react';

// Function
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

// Component
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';

// Style
import './cart-icon.style.scss';

const CartIcon = ({ toggleCartDropdown }) => (
  <div onClick={toggleCartDropdown} className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> 0 </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
