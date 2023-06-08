import { Component } from "react";
import type { INavigation } from "Models/Navigation";
import { connectToNavigation, NavigationState } from "State/Navigation";

import { SVGCircle } from "Components/SVGCircle";
import { NavigationMetric } from "Tools/Metrics";

import "./Burger.scss";

class BurgerButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  shouldComponentUpdate({ menuOpen }: Props) {
    return menuOpen !== this.props.menuOpen;
  }

  private toggle() {
    if (this.props.menuOpen) {
      NavigationMetric.fail();
    } else {
      NavigationMetric.start();
    }
    NavigationState.toggleMenu();
  }

  render() {
    const { menuOpen } = this.props;
    return (
      <button
        onClick={this.toggle}
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

const mSTP = (state: INavigation) => {
  return { menuOpen: state.menuOpen };
};

interface Props {
  menuOpen: boolean;
}

export const Burger = connectToNavigation(mSTP)(BurgerButton);
