import { connect, createUseMutation, createUseState } from "react-galena";
import type { Middleware } from "galena";
import { Galena, Logger, Profiler } from "galena";
import type { IState } from "Models";

const middleware: Middleware[] = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(new Logger(), new Profiler());
}

export const AppState: Galena<IState> = new Galena(middleware);

export const connectToAppState = connect(AppState);
export const useAppState = createUseState(AppState);
export const useAppStateMutation = createUseMutation(AppState);
