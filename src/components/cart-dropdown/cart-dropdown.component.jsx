import React from 'react';

// Function
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

// Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Style
import './cart-dropdown.styles.scss';

const CartDropdown = ({ items, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartDropdown());
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateTopProps = createStructuredSelector({
  items: selectCartItems,
});

export default withRouter(connect(mapStateTopProps)(CartDropdown));
