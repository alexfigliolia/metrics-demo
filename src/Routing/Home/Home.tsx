import { Component } from "react";

import { Route } from "Components/Route";
import { createRouteMetric } from "Tools/MetricFactory";

import { Users } from "./Users";

export const HomeMetric = createRouteMetric("Home");

export class Home extends Component {
  render() {
    return (
      <Route name="Home" metric={HomeMetric}>
        <Users />
      </Route>
    );
  }
}
