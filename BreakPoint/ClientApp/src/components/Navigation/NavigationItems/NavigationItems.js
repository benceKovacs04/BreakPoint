import React, { useContext } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import loginContext from "../../Context/LoginContext";

export default function NavigationItems() {
    let {
        stateShowModal,
        changeStateShowModal,
        stateLoggedIn,
        changeStateLoggedIn
    } = useContext(loginContext);

    let logOut = () => {
        changeStateLoggedIn();
        localStorage.removeItem("token");
    };

    let loggedOut = (
        <NavigationItem click={changeStateShowModal}>Log In</NavigationItem>
    );
    let loggedIn = <NavigationItem click={logOut}>Log Out</NavigationItem>;

    return (
        <ul className={classes.NavigationItems}>
            {stateShowModal}
            {stateLoggedIn ? loggedIn : loggedOut}
            <NavigationItem>Register</NavigationItem>
        </ul>
    );
}
