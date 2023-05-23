import type { Middleware } from "@figliolia/galena";
import { Galena, Logger, Profiler } from "@figliolia/galena";
import {
  connect,
  createUseMutation,
  createUseState,
} from "@figliolia/react-galena";
import type { IState } from "Models";

const middleware: Middleware[] = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(new Logger(), new Profiler());
}

export const AppState = new Galena<IState>(middleware);

export const connectToAppState = connect(AppState);
export const useAppState = createUseState(AppState);
export const useAppStateMutation = createUseMutation(AppState);
