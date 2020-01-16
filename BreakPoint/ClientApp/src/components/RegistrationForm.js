import React, { Component } from 'react';
import axios from "axios";

export class RegistrationForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             email: '',
             password: '',
             feedback: ''
        }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value    
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePwChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post("https://localhost:5001/register", user)
            .then(resp => this.handleResponse(resp.data))
    }

    handleResponse = (errors) => {
        this.setState({
            feedback: errors
        })
    }


    render() {
        const regFormStyle = {
            marginTop: 100,
            display: "inline-block",
        }
        // const reqsStyle = {
        //     backgroundColor : "lightblue",
        //     borderRadius: "10px",
        //     padding: "10px"
        // }
        // const pwFeedbackStyle = {
        //     backgroundColor: "tomato",
        //     borderRadius: "10px",
        //     padding: "10px",
        // }
        const pwReqs =
            <div
                // style={reqsStyle}
            >
                <p>Your password should:</p>
                <p>- be at least 8 characters long</p>
                <p>- contain both lower case and upper case characters</p>
                <p>- contain a digit</p>
                <p>- contain a non-alphanumeric character</p>
            </div>
        return (
            <div style={regFormStyle}>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <br></br>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}
                        required={true}
                        minLength={6}
                    />
                    <br></br>

                    <label>Email address:</label>
                    <br></br>
                    <input type='text' value={this.state.email} onChange={this.handleEmailChange}
                        required={true}
                    />
                    <br></br>

                    <label>Password</label>
                    <br></br>
                    <input type='text' value={this.state.password} onChange={this.handlePwChange}
                        required={true}
                        minLength={8}
                    />
                    <br></br>

                    <br></br>
                    <button type="submit">Register</button>

                </form>
                <br></br>
                <div
                    // style={pwFeedbackStyle}
                >{
                    this.state.feedback === '' ? pwReqs:
                    this.state.feedback.map(
                            (error) => <p>{error.description}</p>
                        )
                    }
                </div>
            </div>

        )
    }
    

}

export default RegistrationForm
