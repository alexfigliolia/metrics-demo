import { Component } from "react";
import { connect } from "react-redux";
import type { IReduxState } from "Reducers";

import { toggleMenu } from "Actions/Navigation";
import { SVGCircle } from "Components/SVGCircle";

import "./Burger.scss";

class BurgerButton extends Component<Props> {
  shouldComponentUpdate({ menuOpen }: Props) {
    return menuOpen !== this.props.menuOpen;
  }

  render() {
    const { menuOpen, toggleMenu } = this.props;
    return (
      <button
        onClick={toggleMenu}
        className={`burger ${menuOpen ? "open" : ""}`}>
        <div>
          <SVGCircle radius="15.5" />
          <div>
            <div className="bar top" />
            <div className="bar middle" />
            <div className="bar bottom" />
          </div>
        </div>
      </button>
    );
  }
}

const mSTP = ({ Navigation }: IReduxState) => {
  return { menuOpen: Navigation.get("menuOpen") };
};

interface Props {
  menuOpen: boolean;
  toggleMenu: typeof toggleMenu;
}

export const Burger = connect(mSTP, { toggleMenu })(BurgerButton);
