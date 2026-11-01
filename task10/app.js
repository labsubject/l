import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div>
                <h2>Date: {this.props.date}</h2>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date().toLocaleDateString()
        };
    }

    render() {
        return (
            <div>
                <h1>Current Date</h1>
                <Display date={this.state.date} />
            </div>
        );
    }
}

export default App;