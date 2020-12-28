import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Contorl from "./control/Control";
import Show from "./show/Show";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Show} />

          <Route exact path="/show" component={Show} />
          <Route exact path="/control" component={Contorl} />

        </Switch>
      </Router>
    );
  }
}
