import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/index.scss';
import Profile from './components/Profile';
import Projects from './components/Projects';

ReactDOM.render(
  <Router>
    <Switch>
      <App>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>
      </App>
    </Switch>
  </Router>,
  document.getElementById('root')
);
