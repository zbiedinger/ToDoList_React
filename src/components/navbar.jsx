import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">
            To Do List
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                {" "}
                <a class="nav-link" href="#">
                  Home{" "}
                </a>{" "}
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {" "}
                  About{" "}
                </a>
              </li>
            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {" "}
                  Menu item{" "}
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link  dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  {" "}
                  Change List{" "}
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      Dropdown item 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      Dropdown item 2{" "}
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      Dropdown item 3{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
