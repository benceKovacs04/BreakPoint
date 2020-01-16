import React, { useContext } from "react";
import classes from "./Backdrop.module.css";

export default function Backdrop(props) {
    return props.show ? (
        <div className={classes.Backdrop} onClick={props.click}></div>
    ) : null;
}
