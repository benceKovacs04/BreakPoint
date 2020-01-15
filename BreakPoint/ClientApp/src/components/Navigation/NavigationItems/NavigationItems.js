import React, { useContext } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import loginContext from "../../Context/LoginContext";

export default function NavigationItems() {
    let { stateShowModal, changeStateShowModal } = useContext(loginContext);

    return (
        <ul className={classes.NavigationItems}>
            {stateShowModal}
            <NavigationItem click={changeStateShowModal}>Log In</NavigationItem>
            <NavigationItem>Register</NavigationItem>
        </ul>
    );
}
