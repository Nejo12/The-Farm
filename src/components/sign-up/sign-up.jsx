import React from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { Link } from "react-router-dom";

import { StyledSignUp } from "./sign-up.styles";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log("form submitted");
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <StyledSignUp>
        <div className="sign-up-card">
          <div className="sign-up-content">
            <h2> Welcome to the Farm</h2>
            <span>Register with your email and password.</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                label="UserName"
                handleChange={this.handleChange}
                value={this.state.displayName}
                required
              />

              <FormInput
                type="email"
                name="email"
                label="eMail"
                handleChange={this.handleChange}
                value={this.state.email}
                required
              />
              <FormInput
                type="password"
                name="password"
                label="Password"
                handleChange={this.handleChange}
                value={this.state.password}
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                handleChange={this.handleChange}
                value={this.state.confirmPassword}
                required
              />

              <Button type="submit" text="Register" />
            </form>
            <p>
              Already registered? Sign in{" "}
              <Link
                to="/signin"
                style={{ color: "orange", textDecoration: " none" }}
              >
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </StyledSignUp>
    );
  }
}

export default SignUp;
