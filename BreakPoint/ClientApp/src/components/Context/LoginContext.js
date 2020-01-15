import React, { useState } from "react";

const loginContext = React.createContext({
    stateShowModal: "",
    changeStateShowModal: () => {}
});

export const AppWrapper = props => {
    let [stateShowModal, setStateShowModal] = useState(false);

    let changeStateShowModal = () => {
        setStateShowModal(true);
    };

    return (
        <loginContext.Provider
            value={{
                stateShowModal,
                changeStateShowModal
            }}
        >
            {props.children}
        </loginContext.Provider>
    );
};

export default loginContext;
