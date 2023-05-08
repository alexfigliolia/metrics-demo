import type { To } from "react-router-dom";

import { ReduxState } from "Tools/ReduxState";

interface INavigationState {
  menuOpen: boolean;
  route: To | null;
}

export const NavigationState = new ReduxState<INavigationState>({
  menuOpen: false,
  route: null,
});

export const Navigation = (state = NavigationState, action: any) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return state.update({ menuOpen: !state.get("menuOpen") });
    case "ROUTE_CHANGE":
      return state.update({ route: action.to, menuOpen: false });
    case "RESET":
      return state.reset();
    default:
      return state;
  }
};
