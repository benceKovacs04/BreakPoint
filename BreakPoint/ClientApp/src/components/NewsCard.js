import React, {Fragment, useState} from "react";

const styles = {
    card: {
        width: "300px",
        margin: "10px",
        padding: "20px",
        backgroundColor: "white"
    },
    cardContainer: {
        textDecoration: "none",
        color: "black",
    },
    title: {
        marginBottom: "10px",
        fontWeight: "bold"
    },
    selected: {
        width: "300px",
        margin: "10px",
        padding: "20px",
        backgroundColor: "lightgrey"
    }
};

export const NewsCard = props => {
    const [selected, setSelected] = useState(false);

    const toggleSelect = () => {
        setSelected(!selected);
    };

    return (

        <a href={props.news.originalURL ? props.news.originalURL : ""} style={styles.cardContainer} target="_blank">
            <div onMouseEnter={toggleSelect} onMouseLeave={toggleSelect}
                 style={selected ? styles.selected : styles.card}>
                <p>{props.news.keyword}</p>
                <p style={styles.title}>{props.news.title}</p>
                <img src={props.news.imageURL ? props.news.imageURL.url : ""} width="260px"/>
            </div>
        </a>
    );
};
