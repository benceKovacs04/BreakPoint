import React, { useContext } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import loginContext from "../../Context/LoginContext";

export default function NavigationItems() {
    let { stateInHome, changeStateInHome } = useContext(loginContext);

    return (
        <ul className={classes.NavigationItems}>
            {stateInHome}
            <NavigationItem click={changeStateInHome}>Log In</NavigationItem>
            <NavigationItem>Register</NavigationItem>
        </ul>
    );
}
