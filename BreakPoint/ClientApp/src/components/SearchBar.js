import React from "react";

export const SearchBar = (props) => {
    return(
        <input onChange={props.change} placeholder="Search for categories"/>
    )
};
