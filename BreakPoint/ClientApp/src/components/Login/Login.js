import React, { useState } from "react";
import Aux from "../../hoc/Auixiliary";
import Axios from "axios";

export default function Login() {
    const [UserName, setUserName] = useState(null);
    const [Password, setPassword] = useState(null);

    const logIn = () => {
        Axios.post("https://localhost:5001/api/login", {
            username: UserName,
            password: Password
        }).then(response => console.log(response));
    };

    return (
        <Aux>
            <p>USername</p>
            <input onChange={event => setUserName(event.target.value)}></input>
            <p>Password</p>
            <input onChange={event => setPassword(event.target.value)}></input>
            <button onClick={logIn}>Log me in</button>
        </Aux>
    );
}
