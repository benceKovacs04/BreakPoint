import React, { useState, useContext } from "react";
import classes from "./Login.module.css";
import Axios from "axios";
import LoginContext from "../Context/LoginContext";

export default function Login() {
    let { changeStateLoggedIn } = useContext(LoginContext);

    const [UserName, setUserName] = useState(null);
    const [Password, setPassword] = useState(null);

    const logIn = () => {
        Axios.post("https://localhost:5001/api/login", {
            username: UserName,
            password: Password
        })
            .then(response =>
                localStorage.setItem("token", response.data["token"])
            )
            .then(changeStateLoggedIn);
    };

    return (
        <div className={classes.Login}>
            <p>Username</p>
            <input onChange={event => setUserName(event.target.value)}></input>
            <p>Password</p>
            <input onChange={event => setPassword(event.target.value)}></input>
            <br></br>
            <button onClick={logIn}>Log me in</button>
        </div>
    );
}
