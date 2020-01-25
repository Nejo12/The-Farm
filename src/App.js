import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact/contact";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";

import { GlobalStyle } from "./global-styles";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/farm" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
