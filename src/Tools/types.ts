import type { ComponentType } from "react";
import type {
  CLSPlugin,
  CriticalResourcePlugin,
  LoggerPlugin,
  Metric,
  MetricEvents,
  PageLoadPlugin,
  PluginTable,
  ReporterPlugin,
} from "@figliolia/metrics";

export type WithLogger<T extends PluginTable> = T & {
  logger: LoggerPlugin;
};

export type RouteMetric = Metric<
  MetricEvents,
  {
    reporter: ReporterPlugin;
    logger: LoggerPlugin;
    pageLoad: PageLoadPlugin;
    resources: CriticalResourcePlugin;
    CLS: CLSPlugin;
  }
>;

export type SetDifference<A, B> = A extends B ? never : A;

export type SetComplement<A, A1 extends A> = SetDifference<A, A1>;

export type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>;

export type IntrinsicProps<
  P extends S,
  S extends Record<string, any>,
> = ComponentType<Subtract<P, S>>;
