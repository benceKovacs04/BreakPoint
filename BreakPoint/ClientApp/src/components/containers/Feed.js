import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import {NewsCard} from "../NewsCard";

export const Feed = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        axios
            .post("https://localhost:5001/subscribe")
            .then(response => setNewsList(response.data));
    }, []);

    return (
        <Fragment>
            {newsList.map(
                (news) => <NewsCard news={news} key={news.id}/>)}
        </Fragment>
    );
};
