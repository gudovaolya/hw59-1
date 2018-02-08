import React, { Component } from 'react';
import FilmsEntries from "./containers/FilmsEntries/FilmsEntries";

class App extends Component {
  render() {
    return (
      <div className="container">
        <FilmsEntries/>
      </div>
    );
  }
}

export default App;
