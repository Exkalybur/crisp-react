/**
 * In webpack terminology the 'entry point'
 * of the First SPA.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ComponentA } from "../components/ComponentA";
import { ComponentB } from "../components/ComponentB";
import { Overview } from "../components/Overview";

ReactDOM.render(
  <Router>
    <div>
      <Helmet title="Crisp React" />
        <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "3rem" }}>
          <h2>Welcome to Crisp React</h2>
        </div>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/a" component={ComponentA} />
          <Route path="/b" component={ComponentB} />
          <Route component={Overview} />
        </Switch>
    </div>
  </Router>,
  document.getElementById("react-root")
);