import { Factory } from "./MetricFactory";

export const NavigationMetric = Factory.createInteraction(
  "Navigation Reliability",
);

NavigationMetric.on("success", () => NavigationMetric.reset());
NavigationMetric.on("failure", () => NavigationMetric.reset());
