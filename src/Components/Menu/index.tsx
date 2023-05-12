import { Component } from "react";
import { connectToNavigation, type NavigationState } from "State/Navigation";

import { Link } from "Components/Link";

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

const mSTP = (state: typeof NavigationState) => {
  return {
    menuOpen: state.get("menuOpen"),
  };
};

interface Props {
  menuOpen: boolean;
}

export const Menu = connectToNavigation(mSTP)(MenuComponent);
