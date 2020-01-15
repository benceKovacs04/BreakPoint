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
        .then(resp => this.handleResponse(resp))
    }

    handleResponse = (resp) => {
        this.setState({
            feedback: resp.data.errors
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>

                    <label>Email address:</label>
                    <input type='text' value={this.state.email} onChange={this.handleEmailChange}></input>

                    <label>Password</label>
                    <input type='text' value={this.state.password} onChange={this.handlePwChange}></input>

                    <button onClick={this.handleSubmit}>Register</button>

                </form>
                <div>{
                    this.state.feedback === '' ? 'Password should be whatever':
                    this.state.feedback.map(
                            (value) => <p>{value.description}</p>
                        )
                    }
                </div>
            </div>

        )
    }
    

}

export default RegistrationForm
