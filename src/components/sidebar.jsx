import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
