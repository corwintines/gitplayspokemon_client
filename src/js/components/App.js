import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.PureComponent {
  render() {
    return (
      <h1>Test</h1>
    )
  }
};

const wrapper = document.getElementById('App');
wrapper ? ReactDOM.render(<App />, wrapper) : false;