import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl, name, price, history }) => (
  <div className='collection-item' >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
