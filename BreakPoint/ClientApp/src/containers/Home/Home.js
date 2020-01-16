import React, { Component } from "react";
import { Feed } from "../Feed/Feed";
import { Search } from "../Search/Search";
import classes from "./Home.module.css";
import Modal from "../../components/UI/Modal/Modal";
import LoginContext from "../../components/Context/LoginContext";
import Login from "../../components/Login/Login";

class Home extends Component {
    static contextType = LoginContext;

    state = {
        newsList: null
    };

    setNewsList = news => {
        this.setState({ newsList: news });
    };

    render() {
        return (
            <div className={classes.Home}>
                <Modal show={this.context.stateShowModal}>
                    <Login />
                </Modal>
                <Search newsHandler={this.setNewsList} />
                {this.state.newsList ? (
                    <Feed newsList={this.state.newsList} />
                ) : (
                    <div>No news in your feed</div>
                )}
            </div>
        );
    }
}

export default Home;
