import React from 'react';
import { Switch } from 'react-router-dom';

import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          
        </Switch>
      </div>
    );
  }
}

export default App;
