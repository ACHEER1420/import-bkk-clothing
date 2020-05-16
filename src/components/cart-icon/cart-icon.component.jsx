import React from 'react';

// Function
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

// Component
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';

// Style
import './cart-icon.style.scss';

const CartIcon = ({ toggleCartDropdown, totalQuantity }) => (
  <div onClick={toggleCartDropdown} className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> {totalQuantity} </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = (state) => ({
  totalQuantity: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
