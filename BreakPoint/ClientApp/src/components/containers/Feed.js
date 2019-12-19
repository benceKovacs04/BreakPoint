import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import {NewsCard} from "../NewsCard";

const styles = {
    feedContainer: {
        "display": "flex",
        "flexDirection": "row",
        "flexWrap": "wrap",
        "justifyContent": "space-evenly",
        "backgroundColor": "#F2F2F6",
        "padding": "10px"
    }
};

export const Feed = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        axios
            .post("https://localhost:5001/subscribe")
            .then(response => setNewsList(response.data));
    }, []);

    return (
        <Fragment>
            <div style={styles.feedContainer}>
                {newsList.map(
                    (news) => <NewsCard news={news} key={news.id}/>)}
            </div>
        </Fragment>
    );
};
