import React from 'react';

// Component
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Auth from './pages/auth/auth.component';
import Shop from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';

// Function
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.util';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

// Style
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // receive setCurrentUser mapDispatchToProp that is an function,
    // will dispatch correct action which is setCurrentUser setted in user.action.js
    const { setCurrentUser } = this.props;

    // check weather or not user arleady signin ?
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        try {
          const snapShot = await userRef.get();
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        } catch (error) {}
      } else {
        console.log('check when else of component did mount will be fired');
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='app-wrapper'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route
              exact
              path='/login'
              render={({ match }) =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <Auth match={match} />
                )
              }
            />
            <Route
              exact
              path='/register'
              render={({ match }) =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <Auth match={match} />
                )
              }
            />
            <Route exact path='/checkout' component={Checkout} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
// const mapStateToProps = ({user}) => ({ currentUser: user.currentUser });

export default connect(mapStateToProps, mapDispatchToProps)(App);
