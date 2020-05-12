import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Auth from './pages/auth/auth.component';
import Shop from './pages/shop/shop.component';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='app-wrapper'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/auth' component={Auth} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
