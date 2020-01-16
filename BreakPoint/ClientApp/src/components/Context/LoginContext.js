import React, { useState } from "react";

const loginContext = React.createContext({
    stateShowModal: "",
    changeStateShowModal: () => {},
    stateLoggedIn: "",
    changeStateLoggedIn: () => {}
});

export const AppWrapper = props => {
    let [stateShowModal, setStateShowModal] = useState(false);
    let [stateLoggedIn, setStateLoggedIn] = useState(false);

    let changeStateShowModal = () => {
        setStateShowModal(!stateShowModal);
    };

    let changeStateLoggedIn = () => {
        setStateLoggedIn(!stateLoggedIn);
    };

    return (
        <loginContext.Provider
            value={{
                stateShowModal,
                changeStateShowModal,
                stateLoggedIn,
                changeStateLoggedIn
            }}
        >
            {props.children}
        </loginContext.Provider>
    );
};

export default loginContext;
