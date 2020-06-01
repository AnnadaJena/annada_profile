import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/index.scss';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import * as serviceWorker from './serviceWorker';

// function init() {
//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker
//         .register('./service-worker.js')
//         .then(registration => {
//           console.log('SW registered: ', registration);
//         })
//         .catch(registrationError => {
//           console.log('SW registration failed: ', registrationError);
//         });
//     });
//   }
// }

// init();

serviceWorker.register();

ReactDOM.render(
  <Router>
    <Switch>
      <App>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </App>
    </Switch>
  </Router>,
  document.getElementById('root')
);
