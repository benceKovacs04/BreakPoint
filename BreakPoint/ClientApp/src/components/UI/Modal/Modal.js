import React, { useContext } from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auixiliary";
import Backdrop from "../Backdrop/Backdrop";
import loginContext from "../../Context/LoginContext";

export default function Modal(props) {
    let { stateShowModal } = useContext(loginContext);

    return (
        <Aux>
            {stateShowModal}
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show
                        ? "translateY(0)"
                        : "translateY(-100vh",
                    opacity: props.show ? "1" : "0"
                }}
            >
                {props.children}
            </div>
        </Aux>
    );
}
