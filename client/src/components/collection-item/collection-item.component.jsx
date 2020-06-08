import React from 'react';

// Function
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

// Component
import CustomButton from '../custom-button/custom-button.component';

// Style
import './collection-item.styles.scss';

const CollectionItem = ({ item, item: { imageUrl, name, price }, addItem }) => {
  return (
    <div className='collection-item'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
