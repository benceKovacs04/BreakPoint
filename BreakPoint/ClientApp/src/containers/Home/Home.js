import React, { Component } from "react";
import { Feed } from "../Feed/Feed";
import { Search } from "../Search/Search";
import classes from "./Home.module.css";

class Home extends Component {
    state = {
        newsList: null
    };

    setNewsList = news => {
        this.setState({ newsList: news });
    };

    render() {
        return (
            <div className={classes.Home}>
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
