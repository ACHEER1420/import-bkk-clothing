import React from 'react';

// Components
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Functions
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';
import { updateCollections } from '../../redux/shop/shop.action.js';
import { connect } from 'react-redux';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    // API call with Promise
    // fetch(
    //   `https://firestore.googleapis.com/v1/projects/supreme-bkk/databases/(default)/documents/collections`
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // Promise
    // collectionRef.get().then((snapshot) => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });

    // Observable
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
