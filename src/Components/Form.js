import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Form extends Component {
    state = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    }

    changeHandler = (event) => {
        this.props.onChange({
            [event.target.name]: event.target.value
        });
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
         this.setState({
             firstname: "",
             lastname: "",
             username: "",
             email: "",
             password: ""
         });
         this.props.onChange({
             firstname: "",
             lastname: "",
             username: "",
             email: "",
             password: ""
         });
    };

  render() {
    return (
      <>
        <form>
            <TextField
                id="FirstName"
                label="First Name"
                name="firstname"
                value={this.state.firstname}
                onChange={event => this.changeHandler(event)}
                margin="normal"
                variant="outlined"
            />
            <br />
            <TextField
                id="LastName"
                label="Last Name"
                name="lastname"
                margin="normal"
                variant="outlined"
                value={this.state.lastname}
                onChange={event => this.changeHandler(event)}
            />
            <br />            
            <TextField
                id="Username"
                name="username"
                label="Username"
                margin="normal"
                variant="outlined"
                value={this.state.username}
                onChange={event => this.changeHandler(event)}  
            />
            <br />
            <TextField
                name="email"
                id="Email"
                label="Email"
                margin="normal"
                variant="outlined"
                value={this.state.email}
                onChange={event => this.changeHandler(event)}
            />
            <br />
            <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={this.state.password}
                onChange={event => this.changeHandler(event)}
            />
            <br />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={event => this.submitHandler(event)}
            >
                SUBMIT
            </Button>
        </form>
      </>
    );
  }
}

export default  Form;