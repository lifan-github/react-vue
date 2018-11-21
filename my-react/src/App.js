import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from './containers/router/PrivateRoute';
import {routerConfig} from './containers/router/routerConfig';

import store from './redux/reducers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute config={routerConfig}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
