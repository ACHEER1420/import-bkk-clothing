import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Auth from './pages/auth/auth.component';
import Shop from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // check weather or not user arleady signin ?
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // userRef.onSnapshot((snapShot) => {
        //   this.setState({
        //     currentUser: {
        //       id: snapShot.id,
        //       ...snapShot.data(),
        //     },
        //   });
        // });
        try {
          const snapShot = await userRef.get();
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        } catch (error) {}
      } else {
        console.log('check when else of component did mount will be fired');
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <div className='app-wrapper'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/login' component={Auth} />
            <Route exact path='/register' component={Auth} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
