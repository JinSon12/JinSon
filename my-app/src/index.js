import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './main/Home';
import Dev from './dev/Dev';
import Footer from './main/Footer';
import AboutMe from './main/AboutMe';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Row>
      <Router>
        <Col md="3" lg="4" xl="4"><AboutMe /></Col>
        <Route exact path="/" component={Home}>
          <Redirect to="/Home" />
        </Route>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Programming" component={Dev} />
          <Route path="/Design" component={Home} />
          <Route path="/Photography" component={Home} />
        </Switch>
      </Router>
    </Row>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
