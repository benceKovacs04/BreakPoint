import React, {Fragment, useState} from "react";
import {Feed} from "./containers/Feed";
import {Search} from "./containers/Search";

export const Home = () => {
    const [newsList, setNewsList] = useState(null);

    return (
        <Fragment>
            <Search newsHandler={setNewsList}/>
            {newsList ? <Feed newsList={newsList}/> : <div>No news in your feed</div>}
        </Fragment>
    )
};
