import React from 'react';

// Functions
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selector';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';

// Styles
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
