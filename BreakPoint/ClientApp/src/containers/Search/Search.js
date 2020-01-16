import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export const Search = props => {
    const [userInput, setUserInput] = useState(null);

    const fetchData = () => {
        axios.post("https://localhost:5001/subscribe", {userInput})
            .then(response => props.newsHandler(response.data));
    };

    return (
        <Fragment>
            <input
                onChange={event => setUserInput(event.target.value)}
                onKeyPress={event => {
                    if (event.key === "Enter") {
                        fetchData();
                    }
                }}
                placeholder="Search for categories"
            />
        </Fragment>
    );
};
