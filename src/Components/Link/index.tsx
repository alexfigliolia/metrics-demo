import type { MouseEvent } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import type { IReduxState } from "Reducers/index";
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

const mSTP = ({ Navigation }: IReduxState, { to }: OwnProps) => {
  return { active: Navigation.get("route") === to };
};

interface OwnProps {
  to: string;
  text: string;
}

interface Props extends OwnProps {
  active: boolean;
}

export const Link = connect(mSTP)(LinkComponent);
