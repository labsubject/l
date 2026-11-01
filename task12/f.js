import React, { Component } from "react";

class App extends Component {

  // Normal function
  showDateTime() {
    document.getElementById("result").innerHTML =
      new Date().toLocaleString();
  }

  // Arrow function
  showGoodBye = () => {
    document.getElementById("result").innerHTML = "Good Bye";
  };

  render() {
    return (
      <div>
        <h1>React Event Handling</h1>

        <button onClick={this.showDateTime.bind(this)}> //Binds the normal method to the component
          Show Date & Time
        </button>

        <button onClick={this.showGoodBye}>
          Good Bye
        </button>

        <h2 id="result"></h2>
      </div>
    );
  }
}

export default App;