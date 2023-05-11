import { connectGalena } from "react-galena";
import { Galena, Logger, Profiler } from "galena";

import type { NavigationState } from "./Navigation";

export type IState = {
  navigation: typeof NavigationState;
};

export const State: Galena<IState> = new Galena([new Logger(), new Profiler()]);

export const galenaConnect = connectGalena(State);
