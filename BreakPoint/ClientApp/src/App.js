import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./containers/Home/Home";

import './custom.css'
import RegistrationForm from './components/RegistrationForm';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={RegistrationForm} />
      </Layout>
    );
  }
}
