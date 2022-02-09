import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.decrement = this.increment.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Inc</button>
        <button onClick={this.increment}>Dec</button>
      </div>
    );
  }
}
