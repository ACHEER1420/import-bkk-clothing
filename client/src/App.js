import React, { useEffect } from 'react';

// Component
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Auth from './pages/auth/auth.component';
import Shop from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';

// Function
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

// Style
import './App.scss';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

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
              currentUser ? <Redirect to='/' /> : <Auth match={match} />
            }
          />
          <Route
            exact
            path='/register'
            render={({ match }) =>
              currentUser ? <Redirect to='/' /> : <Auth match={match} />
            }
          />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
// const mapStateToProps = ({user}) => ({ currentUser: user.currentUser });

export default connect(mapStateToProps, mapDispatchToProps)(App);
