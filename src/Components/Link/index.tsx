import type { MouseEvent } from "react";
import { Component } from "react";
import type { To } from "react-router";
import type { NavigationState } from "State/Navigation";
import { connectToNavigation } from "State/Navigation";

import { Routing } from "Routing";

class LinkComponent extends Component<Props> {
  shouldComponentUpdate({ to, text, currentRoute }: Props) {
    if (to !== this.props.to) return true;
    if (text !== this.props.text) return true;
    if (currentRoute !== this.props.currentRoute) return true;
    return false;
  }

  private navigate(route: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event?.preventDefault();
      void Routing.navigate(route);
    };
  }

  render() {
    const { currentRoute, text, to } = this.props;
    return (
      <div className={`link ${currentRoute === to ? "active" : ""}`}>
        <a onClick={this.navigate(to)}>{text}</a>
      </div>
    );
  }
}

const selection = (state: typeof NavigationState) => {
  return { currentRoute: state.get("route") };
};

interface OwnProps {
  to: string;
  text: string;
}

interface Props extends OwnProps {
  currentRoute: To | null;
}

export const Link = connectToNavigation(selection)(LinkComponent);
