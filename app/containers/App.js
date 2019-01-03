import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import Index from '@containers/Index'
import Home from '@pages/Home'
import UserProfile from '@pages/UserProfile'
import NotFound from '@pages/NotFound'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Index}>
          <IndexRoute component={Home} />
          <Route path="/:forum" component={Home} />
          <Route path="/user/:username" component={UserProfile} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
      /* <Route path="/detail/:id" component={Detail}/>   */
    )
  }
}

export default App
