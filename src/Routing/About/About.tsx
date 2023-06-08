import { Component, Fragment } from "react";
import { StopMetric } from "@figliolia/react-metrics";

import { Route } from "Components/Route";
import { createRouteMetric } from "Tools/MetricFactory";

import "./About.scss";

const AboutMetric = createRouteMetric("About");

export class About extends Component {
  render() {
    return (
      <Fragment>
        <Route name="About" metric={AboutMetric}>
          About
        </Route>
        <StopMetric metric={AboutMetric} />
      </Fragment>
    );
  }
}
