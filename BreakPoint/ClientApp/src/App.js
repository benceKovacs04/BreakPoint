import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import loginContext, { AppWrapper } from "./components/Context/LoginContext";

import "./custom.css";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <AppWrapper>
                <Layout>
                    <Route exact path="/" component={Home} />
                </Layout>
            </AppWrapper>
        );
    }
}
