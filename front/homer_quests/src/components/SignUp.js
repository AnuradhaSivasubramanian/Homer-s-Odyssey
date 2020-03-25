import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "mon@email.com",
    password: "monPassw0rd",
    name: "James",
    lastname: "Bond",
    flash: ""
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
  // updatePwdConfirmField = e => {
  //   this.setState({
  //     passwordConfirm: e.target.value
  //   });
  // };
  updateNameField = e => {
    this.setState({
      name: e.target.value
    });
  };
  updateLastnameField = e => {
    this.setState({
      lastname: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(res => this.setState({ flash: res.flash }))
      .catch(err => this.setState({ flash: err.flash }));
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" onChange={this.updateEmailField} />
          <input type="text" name="password" onChange={this.updatePwdField} />
          {/* <input
            type="text"
            name="password_confirm"
            // onChange={this.updatePwdConfirmField}
          /> */}
          <input type="text" name="name" onChange={this.updateNameField} />
          <input
            type="text"
            name="lastname"
            onChange={this.updateLastnameField}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SignUp;
