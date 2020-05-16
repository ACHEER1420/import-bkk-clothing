import React from 'react';

// Function
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';

// Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// Style
import './cart-dropdown.styles.scss';

const CartDropdown = ({ items }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateTopProps = (state) => ({
  items: selectCartItems(state),
});

export default connect(mapStateTopProps)(CartDropdown);
