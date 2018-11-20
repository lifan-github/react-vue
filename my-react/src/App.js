import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from './containers/router/PrivateRoute';
import {routerConfig} from './containers/router/routerConfig';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute config={routerConfig} />
        </Switch>
      </Router>
    );
  }
}

export default App;
