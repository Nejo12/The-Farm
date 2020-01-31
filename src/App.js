import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.action";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { GlobalStyle } from "./global-styles";

const Home = lazy(() => import("./pages/home/home"));
const Shop = lazy(() => import("./pages/shop/shop"));
const SignIn = lazy(() => import("./components/sign-in/sign-in"));
const SignUp = lazy(() => import("./components/sign-up/sign-up"));
const Contact = lazy(() => import("./pages/contact/contact"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/signin"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignIn />
                }
              />
              <Route
                path="/signup"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignUp />
                }
              />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
