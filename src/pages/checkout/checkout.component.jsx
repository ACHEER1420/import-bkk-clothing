import React from 'react';

// Function
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Component
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/cart/cart.selector';

import './checkout.styles.scss';

const Checkout = ({ cartItems, totalPrice }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className='total'>TOTAL: ${totalPrice}</div>
    <StripeCheckoutButton price={totalPrice} />
    <div className='testing-card'>
      <span>*Please use the following test credit card for payment*</span>
      <span>Test card: 4242-4242-4242-4242</span>
      <span>EXP: 01/25 CVV: 123</span>
      <a href='https://stripe.com/docs/testing#cards'>For more testing card using Stripe Click here!</a>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(Checkout);
