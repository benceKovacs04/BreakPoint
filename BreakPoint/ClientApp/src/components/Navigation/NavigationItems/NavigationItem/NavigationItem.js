import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = props => (
    <li className={classes.NavigationItem}>
        <button
            onClick={props.click}
            className={props.active ? classes.active : null}
        >
            {props.children}
        </button>
    </li>
);

export default navigationItem;
