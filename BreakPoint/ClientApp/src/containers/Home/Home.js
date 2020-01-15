import React, { useState } from "react";
import { Feed } from "../Feed/Feed";
import { Search } from "../Search/Search";
import classes from "./Home.module.css";

export const Home = () => {
    const [newsList, setNewsList] = useState(null);

    return (
        <div className={classes.Home}>
            <Search newsHandler={setNewsList} />
            {newsList ? (
                <Feed newsList={newsList} />
            ) : (
                <div>No news in your feed</div>
            )}
        </div>
    );
};
