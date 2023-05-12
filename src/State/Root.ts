import {
  connectGalena,
  createUseGalena,
  createUseGalenaMutation,
} from "react-galena";
import type { State } from "galena";
import { Galena, Logger, Profiler } from "galena";

import type { INavigation } from "./Navigation";

export type IState = {
  navigation: State<INavigation>;
};

export const AppState: Galena<IState> = new Galena([
  new Logger(),
  new Profiler(),
]);

export const galenaConnect = connectGalena(AppState);
export const useGalena = createUseGalena(AppState);
export const useGalenaMutation = createUseGalenaMutation(AppState);
