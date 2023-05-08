import { combineReducers } from "redux";

import type { NavigationState } from "./Navigation";
import { Navigation } from "./Navigation";

export interface IReduxState {
  Navigation: typeof NavigationState;
}

export const Reducers = combineReducers({
  Navigation,
});
