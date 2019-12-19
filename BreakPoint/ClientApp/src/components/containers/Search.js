import React, {useState, useEffect} from "react";
import axios from "axios";
import {SearchBar} from "../SearchBar";

export const Search = () => {
    const [userInput, setUserInput] = useState(null);

    const handleSearch = (event) => {
        setUserInput(event.target.value);
        fetchData();
    };

    const fetchData = () => {
        axios.post("https://localhost:5001/subscribe", {userInput}).then(response => console.log(response))
    };

    return (
        <SearchBar change={handleSearch}/>
    )
};