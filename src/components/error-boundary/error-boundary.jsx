import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          {/* // from https://www.kapwing.com/404-illustrations?ref=producthunt */}
          <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
          <ErrorImageText>
            Something went wrong! Better call Gabriel.
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
