import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";

import "../components/signin.css";

class SignIn extends Component {
  state = {
    email: "mon@email.com",
    password: "monPassw0rd",
    signin: false
  };
  updateEmailField = e => {
    this.setState({
      email: e.target.value
    });
  };
  updatePwdField = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ signin: true });
    // fetch("/auth/signin", {
    //   method: "POST",
    //   headers: new Headers({
    //     "Content-Type": "application/json"
    //   }),
    //   body: JSON.stringify(this.state)
    // })
    //   .then(res => res.json())
    //   .then(res => this.setState({ flash: res.flash, signin: true }))
    //   .catch(err => this.setState({ flash: err.flash }));
  };

  render() {
    if (this.state.signin === true) {
      return <Redirect to="/profile" />;
    }
    return (
      <div className="signin_maincontainer">
        <Link to="/signup">Sign Up</Link>

        <h1>Sign in!!</h1>
        <form onSubmit={this.handleSubmit} className="signin_container">
          <TextField
            label="email"
            type="email"
            name="email"
            onChange={this.updateEmailField}
          />
          <TextField
            label="password"
            type="text"
            name="password"
            onChange={this.updatePwdField}
          />
          <TextField
            label="confirm password"
            type="text"
            name="password_confirm"
          />
          <Button
            className="button_form"
            variant="contained"
            color="primary"
            value="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default SignIn;
