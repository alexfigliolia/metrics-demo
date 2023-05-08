import { Component } from "react";
import { connect } from "react-redux";

import { Link } from "Components/Link";
import type { IReduxState } from "Reducers/index";

import "./Menu.scss";

class MenuComponent extends Component<Props> {
  shouldComponentUpdate({ menuOpen }: Props) {
    return menuOpen !== this.props.menuOpen;
  }

  render() {
    const { menuOpen } = this.props;
    return (
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div>
          <Link to="/" text="Home" />
          <Link to="/about" text="About" />
          <Link to="/contact" text="Contact" />
        </div>
      </nav>
    );
  }
}

const mSTP = ({ Navigation }: IReduxState) => {
  return {
    menuOpen: Navigation.get("menuOpen"),
  };
};

interface Props {
  menuOpen: boolean;
}

export const Menu = connect(mSTP)(MenuComponent);
