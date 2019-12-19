import React, {Fragment} from "react";
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

export const Feed = (props) => {


    return (
        <Fragment>
            <div style={styles.feedContainer}>
                {props.newsList.map(news => <NewsCard news={news} key={news.id}/>)}
            </div>
        </Fragment>
    );
};
