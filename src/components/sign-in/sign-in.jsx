import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
  SignInStyles,
  SignInContentStyles,
  ButtonsBarContainer
} from "../sign-in-and-sign-up-styles/sign-in-and-sign-up.styles";

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
      alert(error.message);
    }
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <SignInStyles>
        <SignInContentStyles>
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

            <ButtonsBarContainer>
              <CustomButton text="Sign in" callback={this.handelSubmit} />
              <CustomButton
                isGoogleSignIn
                onClick={signInWithGoogle}
                text="Sign in with Google"
              />
            </ButtonsBarContainer>
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
        </SignInContentStyles>
      </SignInStyles>
    );
  }
}

export default SignIn;
