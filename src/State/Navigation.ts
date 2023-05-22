import {
  connect,
  createUseMutation,
  createUseState,
} from "@figliolia/react-galena";
import type { INavigation } from "Models/Navigation";
import { NavigationModel } from "Models/Navigation";

import { AppState } from "./Root";

export const NavigationState = AppState.composeState<
  INavigation,
  typeof NavigationModel
>(
  "navigation",
  {
    route: null,
    menuOpen: false,
  },
  NavigationModel,
);

export const connectToNavigation = connect(NavigationState);
export const useNavigationState = createUseState(NavigationState);
export const useNavigationMutation = createUseMutation(NavigationState);
