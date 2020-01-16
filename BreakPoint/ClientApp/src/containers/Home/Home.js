import React, { Component } from "react";
import { Feed } from "../Feed/Feed";
import { Search } from "../Search/Search";
import classes from "./Home.module.css";
import Aux from "../../hoc/Auixiliary";
import LoginContext from "../../components/Context/LoginContext";

class Home extends Component {
    static contextType = LoginContext;

    state = {
        newsList: null
    };

    setNewsList = news => {
        this.setState({ newsList: news });
    };

    loggedIn = (
        <Aux>
            <Search newsHandler={this.setNewsList} />
            {this.state.newsList ? (
                <Feed newsList={this.state.newsList} />
            ) : (
                <div>No news in your feed</div>
            )}
        </Aux>
    ); /* MEGKÉRDEZNI EZ MIÉRT NEM RENDERELI ÚJRA */

    render() {
        return (
            <div className={classes.Home}>
                {this.context.stateLoggedIn ? (
                    <Aux>
                        <Search newsHandler={this.setNewsList} />
                        {this.state.newsList ? (
                            <Feed newsList={this.state.newsList} />
                        ) : (
                            <div>No news in your feed</div>
                        )}
                    </Aux>
                ) : null}
            </div>
        );
    }
}

export default Home;
