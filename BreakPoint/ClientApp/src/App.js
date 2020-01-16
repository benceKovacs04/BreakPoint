import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import loginContext, { AppWrapper } from "./components/Context/LoginContext";

import RegistrationForm from './components/RegistrationForm';

export default class App extends Component {
  static displayName = App.name;

    render() {
        return (
            <Router>
                <AppWrapper>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path='/register' component={RegistrationForm} />
                    </Layout>
                </AppWrapper>
            </Router>
        );
    }
}
