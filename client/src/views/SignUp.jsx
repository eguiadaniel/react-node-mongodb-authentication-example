import React, { Component } from 'react'
import {signUp} from './../services/api'

class SignUp extends Component {
    state={
        name:'',
        email: '',
        password: ''
    }

    handleFormSubmission = async (event) => {
        event.preventDefault();
        const user = await signUp({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        });
        console.log(user)

    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
  

    render() {
        return (
            <div>

            <h1>SignUp</h1>

            <form onSubmit={this.handleFormSubmission}>
                <label htmlFor="name-input">Name</label>
                <input 
                    id="name-input" 
                    type="text" 
                    placeholder="James Dean" 
                    name="name"
                    value={this.state.name} 
                    onChange={this.handleInputChange}
                />
                <label htmlFor="email-input">Email</label>
                <input 
                    id="email-input" 
                    type="email" 
                    placeholder="Your email" 
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleInputChange}
                />
                <label htmlFor="password-input">Password</label>
                <input 
                    id="password-input" 
                    type="password" 
                    placeholder="A secure password" 
                    name="password"
                    value={this.state.password} 
                    onChange={this.handleInputChange}
                />
                <button>Sign Up </button>
            </form>
                
            </div>
        )
    }
}

export default SignUp
