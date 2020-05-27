import React from 'react';

// Components
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

// Functions
import { fetchCollectionStratAsync } from '../../redux/shop/shop.action.js';
import { connect } from 'react-redux';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStratAsync } = this.props;
    fetchCollectionStratAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStratAsync: () => dispatch(fetchCollectionStratAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
