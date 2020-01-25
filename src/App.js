import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact/contact";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { GlobalStyle } from "./global-styles";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navigation currentUser={this.state.currentUser} />
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
