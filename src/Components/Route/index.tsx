import type { ReactNode } from "react";
import { Component, Fragment } from "react";
import { StartMetric } from "@figliolia/react-metrics";

import type { RouteMetric } from "Tools/types";

export class Route extends Component<Props> {
  componentWillUnmount() {
    this.props.metric.reset();
  }

  render() {
    const { name, children } = this.props;
    return (
      <Fragment>
        <StartMetric metric={this.props.metric} />
        <div className={`Route ${name}`}>{children}</div>
      </Fragment>
    );
  }
}

interface Props {
  name: string;
  metric: RouteMetric;
  children: ReactNode;
}
