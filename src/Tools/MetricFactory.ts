import {
  CLSPlugin,
  CriticalResourcePlugin,
  LoggerPlugin,
  MetricFactory,
  PageLoadPlugin,
  ProcessingQueue,
  ReporterPlugin,
} from "@figliolia/metrics";

const Queue = new ProcessingQueue("/analytics");

export const Factory = new MetricFactory(
  {
    logger: LoggerPlugin,
    reporter: ReporterPlugin,
  },
  Queue,
);

export const createRouteMetric = (name: string) => {
  return Factory.createMetric(`${name} TTI`, {
    pageLoad: new PageLoadPlugin(),
    resources: new CriticalResourcePlugin(),
    CLS: new CLSPlugin(`.Route.${name}`),
  });
};
