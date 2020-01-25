import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import { StyledSignIn } from "./sign-in.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handelSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
    console.log("form submitted");
  };

  render() {
    return (
      <StyledSignIn>
        <div className="sign-in-content">
          <div className="content">
            <h2>Welcome back </h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={this.handelSubmit}>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="eMail"
                required
              />

              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="Password"
              />

              <Button type="submit" text="Sign in" />
              <Button
                onClick={signInWithGoogle}
                isGoogleSignIn
                text="Sign in with Google"
              />
            </form>

            <p>
              New? Sign up
              <Link
                to="/signup"
                style={{ color: "orange", textDecoration: " none" }}
              >
                {" "}
                {""}
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </StyledSignIn>
    );
  }
}

export default SignIn;
