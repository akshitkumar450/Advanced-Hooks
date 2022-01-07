import React, { Component } from "react";

export class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  // used to show error on UI
  // catches and throw any error when occurs on any the child components
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  //   used to log the error
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h4>Something went wrong💩.</h4>;
    }

    return this.props.children;
  }
}

export default Error;
