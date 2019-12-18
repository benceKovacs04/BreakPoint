import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { NewsCard } from "../NewsCard";

export const Feed = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        axios
            .post("https://localhost:44381/subscribe")
            .then(response => setNewsList(response));
    }, []);

    return (
        <Fragment>
            {newsList.map(news => (
                <NewsCard news={news}></NewsCard>
            ))}
        </Fragment>
    );
};
