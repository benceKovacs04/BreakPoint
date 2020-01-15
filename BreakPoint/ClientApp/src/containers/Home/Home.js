import React, { Component } from "react";
import { Feed } from "../Feed/Feed";
import { Search } from "../Search/Search";
import classes from "./Home.module.css";
import Modal from "../../components/UI/Modal/Modal";
import LoginContext from "../../components/Context/LoginContext";

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
                <Modal show={this.context.stateShowModal} />
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
