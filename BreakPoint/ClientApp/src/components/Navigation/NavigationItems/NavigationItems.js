import React, { useContext } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import loginContext from "../../Context/LoginContext";
import { Link } from "react-router-dom";

export default function NavigationItems() {
    let { stateShowModal, changeStateShowModal } = useContext(loginContext);

    return (
        <ul className={classes.NavigationItems}>
            {stateShowModal}
            <NavigationItem click={changeStateShowModal}>Log In</NavigationItem>
            <Link to={{ pathname: "/register" }} style={kabbe}>Register</Link>

        </ul>
    );
}

const ehh = () => {
    // return <Link></Link>
}

const kabbe = {
    textDecoration: 'none',
    color: 'white',
    marginLeft: "30px",
}