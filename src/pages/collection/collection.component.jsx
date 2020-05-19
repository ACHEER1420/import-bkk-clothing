import React from 'react';

// Functions
import { selectShopCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

// Components
import CollectionItems from '../../components/collection-item/collection-item.component';

// Styles
import './collection.style.scss';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h1 className='title'>{title}</h1>
      <div className='items'>
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
