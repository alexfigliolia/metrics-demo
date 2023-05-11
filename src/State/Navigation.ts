import { connectState } from "react-galena";
import type { To } from "react-router";

import { State } from "./Root";

export const NavigationState = State.createSlice<{
  menuOpen: boolean;
  route: To | null;
}>("navigation", {
  menuOpen: false,
  route: null,
});

export const connectToNavigation = connectState(NavigationState);
