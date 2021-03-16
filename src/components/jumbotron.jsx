import React, { Component } from "react";

class Jumbotron extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Keep your Lists ALIVE</h1>
          <p class="lead">
            Track your everyday with a list or two. Combine your lists or see
            them seperate.
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
