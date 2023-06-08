import { Component, Fragment } from "react";
import { StopMetric } from "@figliolia/react-metrics";

import { Route } from "Components/Route";
import { createRouteMetric } from "Tools/MetricFactory";

import "./Contact.scss";

const ContactMetric = createRouteMetric("Contact");

export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Route name="Contact" metric={ContactMetric}>
          Contact
        </Route>
        <StopMetric metric={ContactMetric} />
      </Fragment>
    );
  }
}
