import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Intro from './screens/Intro';
import Main from './screens/Main';
import End from './screens/End';

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/end">
            <End />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
