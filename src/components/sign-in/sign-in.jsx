import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { StyledSignIn } from "./sign-in.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handelSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log("Error signin in", error.message);
    }
    this.setState(
      { email: "", password: "" }
      // () => console.log("form submitted")
    );
  };

  render() {
    const { email, password } = this.state;

    return (
      <StyledSignIn>
        <div className="sign-in-content">
          <div className="content">
            <h2>Welcome back </h2>
            <span>Sign in with your email and password.</span>
            <form>
              <FormInput
                type="email"
                name="email"
                value={email}
                handleChange={this.handleChange}
                label="eMail"
                required
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                handleChange={this.handleChange}
                label="Password"
              />

              <Button text="Sign in" callback={this.handelSubmit} />
              <Button
                onClick={signInWithGoogle}
                isGoogleSignIn
                text="Sign in with Google"
              />
            </form>

            <p>
              Don't have an account?
              <Link
                to="/signup"
                style={{ color: "orange", textDecoration: " none" }}
              >
                {" "}
                {""}
                Sign up
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
