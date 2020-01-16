import React, { Component } from "react";
import { Container } from "reactstrap";
import Toolbar from "../Navigation/Toolbar/Toolbar";

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <Toolbar />
                <Container>{this.props.children}</Container>
            </div>
        );
    }
}
