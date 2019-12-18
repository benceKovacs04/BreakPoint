import React, { Component } from "react";
import { Feed } from "./containers/Feed";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return <Feed></Feed>;
    }
}
