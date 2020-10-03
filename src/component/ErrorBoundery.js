import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { error: "" };

  static getDerivedStateFromError(error) {
    return {
      error: error.toString(),
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("errrorororo", error, errorInfo.componentStack);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="ErrorBoundary">
          <h2>something wwent wrong</h2>
          {this.state.error}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
