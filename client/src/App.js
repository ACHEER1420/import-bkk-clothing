import React, { useEffect, lazy, Suspense } from 'react';

// Component
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

// Function
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

// Style
import { GlobalStyle } from './global.styles';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));
const Auth = lazy(() => import('./pages/auth/auth.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <div className='app-wrapper'>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Homepage} />
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
            </Suspense>
          </ErrorBoundary>
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
