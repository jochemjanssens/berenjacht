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
          <Route path="/end" component={End} />
          <Route path="/main" component={Main} />
          <Route path="/" component={Intro} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
