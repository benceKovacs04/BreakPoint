import React, { Fragment } from "react";

const styles = {
    card: {
        width: "100px",
        height: "100px",
        border: "solid black 1px"
    }
};

export const NewsCard = props => {
    return (
        <div style={styles.card}>
            <p>{props.news.title}</p>
        </div>
    );
};
