import { Component } from "react";

import { Burger } from "Components/Burger";

import "./Header.scss";

export class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <nav className="main-header">
        <div>
          <h1>Hello</h1>
          <Burger />
        </div>
      </nav>
    );
  }
}
