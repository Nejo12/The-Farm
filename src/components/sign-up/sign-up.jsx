import React from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import {
  SignInStyles,
  SignInContentStyles,
  ButtonsBarContainer
} from "../sign-in-and-sign-up-styles/sign-in-and-sign-up.styles";

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

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("The Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignInStyles>
        <SignInContentStyles>
          <h2> Welcome to the Farm</h2>
          <span>Register with your email and password.</span>
          <form>
            <FormInput
              type="text"
              name="displayName"
              label="Full Name"
              handleChange={this.handleChange}
              value={displayName}
              required
            />

            <FormInput
              type="email"
              name="email"
              label="eMail"
              handleChange={this.handleChange}
              value={email}
              required
            />

            <FormInput
              type="password"
              name="password"
              label="Password"
              handleChange={this.handleChange}
              value={password}
              required
            />

            <FormInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              handleChange={this.handleChange}
              value={confirmPassword}
              required
            />
            <ButtonsBarContainer>
              <CustomButton text="Register" callback={this.handleSubmit} />
            </ButtonsBarContainer>
          </form>
          <p>
            Already have an account?
            <Link
              to="/signin"
              style={{ color: "orange", textDecoration: " none" }}
            >
              {" "}
              {""}
              Sign in
            </Link>
            .
          </p>
        </SignInContentStyles>
      </SignInStyles>
    );
  }
}

export default SignUp;
