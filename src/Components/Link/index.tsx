import type { MouseEvent } from "react";
import { Component } from "react";
import type { INavigation } from "State/Navigation";
import { connectToNavigation } from "State/Navigation";

import { Routing } from "Routing";

class LinkComponent extends Component<Props> {
  shouldComponentUpdate({ to, text, active }: Props) {
    if (to !== this.props.to) return true;
    if (text !== this.props.text) return true;
    if (active !== this.props.active) return true;
    return false;
  }

  private navigate(route: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event?.preventDefault();
      void Routing.navigate(route);
    };
  }

  render() {
    const { active, text, to } = this.props;
    return (
      <div className={`link ${active ? "active" : ""}`}>
        <a onClick={this.navigate(to)}>{text}</a>
      </div>
    );
  }
}

const mSTP = (state: INavigation, { to }: OwnProps) => {
  return { active: state.route === to };
};

interface OwnProps {
  to: string;
  text: string;
}

interface Props extends OwnProps {
  active: boolean;
}

export const Link = connectToNavigation(mSTP)(LinkComponent);
