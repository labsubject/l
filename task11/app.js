
import React, { Component } from "react";

class Demo extends Component {
  state = { count: 0 };

  constructor(props) {
    super(props);
    console.log("1. Constructor called");
  }

  componentDidMount() {
    console.log("2. Component Did Mount");
  }

  componentDidUpdate(p, s) {
    console.log("3. Component Did Update");
    console.log("Previous count:", s.count);
    console.log("Current count:", this.state.count);
  }

  componentWillUnmount() {
    console.log("4. Component Will Unmount");
  }

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>React Component Lifecycle</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count:this.state.count + 1 })}>
          Increase Count
        </button>
      </div>
    );
  }
}

class App extends Component {
  state = { show: true };

  render() {
    return (
      <div>
        {this.state.show && <Demo />}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Mount / Unmount Component
        </button>
      </div>
    );
  }
}

export default App;
