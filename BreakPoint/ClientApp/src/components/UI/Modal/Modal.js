import React, { useContext } from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auixiliary";
import Backdrop from "../Backdrop/Backdrop";
import loginContext from "../../Context/LoginContext";

export default function Modal(props) {
    let { stateShowModal, changeStateShowModal } = useContext(loginContext);
    return (
        <Aux>
            <Backdrop show={stateShowModal} click={changeStateShowModal} />
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
