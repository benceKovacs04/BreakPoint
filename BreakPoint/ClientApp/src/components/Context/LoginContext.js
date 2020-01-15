import React, { useState } from "react";

const loginContext = React.createContext({
    stateInHome: "",
    changeStateInHome: () => {}
});

export const AppWrapper = props => {
    let [stateInHome, setStateInHome] = useState(false);

    let changeStateInHome = () => {
        setStateInHome(true);
    };

    return (
        <loginContext.Provider
            value={{
                stateInHome,
                changeStateInHome
            }}
        >
            {props.children}
        </loginContext.Provider>
    );
};

export default loginContext;
