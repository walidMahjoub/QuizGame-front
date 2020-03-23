import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Message from "./Message"
import AppJs from './App'
import HooksTs from './HooksTs';

ReactDOM.render(
    <Router>
        <Route
            exact
            path="/"
            component={() => <Message from="Max" body="Hi !" />}
        />
        <Route exact path="/app" component={AppJs} />
        <Route exact path="/hooksTs" component={HooksTs} />
    </Router>,
    document.getElementById('root')
);
