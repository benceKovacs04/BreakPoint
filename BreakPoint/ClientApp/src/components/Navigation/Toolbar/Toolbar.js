import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import { Link } from "react-router-dom";

const toolbar = props => (
    <header className={classes.Toolbar}>
        <Link to={{
            pathname: "/"
        }}>
            <div>MENU</div>
        </Link>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
