import React, { Component, useContext } from "react";
import { Container } from "reactstrap";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Login from "../../components/Login/Login";
import Modal from "../../components/UI/Modal/Modal";
import LoginContext from "../Context/LoginContext";

export class Layout extends Component {
    static displayName = Layout.name;
    static contextType = LoginContext;

    render() {
        return (
            <div>
                <Modal show={this.context.stateShowModal}>
                    <Login />
                </Modal>
                <Toolbar />
                <Container>{this.props.children}</Container>
            </div>
        );
    }
}
