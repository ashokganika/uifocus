import { Button } from "@material-ui/core";
import React from "react";

export default class Blog extends React.Component {
  state = {
    stateVale: 0,
  };

  handleIncrement = () => {
    this.setState({ stateVale: this.state.stateVale + 1 });
  };
  render() {
    if (this.state.stateVale > 2) throw new Error("error in increment ");
    return (
      <div>
        <h2>increment page blog number</h2>
        <h4>the blog page value is : {this.state.stateVale}</h4>
        <Button onClick={this.handleIncrement}>increment</Button>
      </div>
    );
  }
}
