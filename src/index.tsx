import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Message from "./Message";
import App from "./App";

ReactDOM.render(
  <Router>
    <Route
      exact
      path="/"
      component={() => <Message from="Max" body="Hi !" />}
    />
    <Route exact path="/app" component={App} />
  </Router>,
  document.getElementById("root")
);
