import {
  connectState,
  createUseState,
  createUseStateMutation,
} from "react-galena";
import type { To } from "react-router";

import { AppState } from "./Root";

export interface INavigation {
  menuOpen: boolean;
  route: To | null;
}

export const NavigationState = AppState.createSlice<INavigation>("navigation", {
  menuOpen: false,
  route: null,
});

export const connectToNavigation = connectState(NavigationState);
export const useNavigationState = createUseState(NavigationState);
export const useNavigationMutation = createUseStateMutation(NavigationState);
