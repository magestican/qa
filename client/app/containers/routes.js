import React, { Component } from 'react';
import FaqPage from '../components/pages/faq';
import HomePage from '../components/pages/home';
import { Route, Switch } from "react-router-dom";

export default class Routes extends Component {
    render() {
        return (<Switch className="router">
            <Route exact path="/" component={HomePage} />
            <Route path="/faqs" component={FaqPage} />
        </Switch>)
    }
}
