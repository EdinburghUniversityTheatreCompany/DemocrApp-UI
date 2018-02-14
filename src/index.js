import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap/js/bootstrap.min.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Define view, components and routes here:
import Landing from './views/Landing';
import Start from './views/Start';
import Help from './views/Help';
import Breadcrumbs from './helpers/Breadcrumbs';

const Routes = () => (
  <div>
    <Breadcrumbs />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/start" component={Start} />
      <Route path="/help" component={Help} />
    </Switch>
  </div>
);

ReactDOM.render((
  <Router>
    <Routes />
  </Router>
  ), document.getElementById('root'));

registerServiceWorker();
