import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import {
  removeItem,
  incQuantity,
  decQuantity,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({
  item: { id, name, quantity, price, imageUrl },
  dispatch,
}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt={name} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div
        className='arrow'
        onClick={() =>
          quantity > 1 ? dispatch(decQuantity(id)) : dispatch(removeItem(id))
        }
      >
        &#10094;
      </div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => dispatch(incQuantity(id))}>
        &#10095;
      </div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => dispatch(removeItem(id))}>
      &#10005;
    </div>
  </div>
);

export default connect()(CheckoutItem);
