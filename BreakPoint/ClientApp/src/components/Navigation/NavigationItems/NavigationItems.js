import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem active>Log In</NavigationItem>
        <NavigationItem>Register</NavigationItem>
    </ul>
);

export default navigationItems;
