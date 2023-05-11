import type { To } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { NavigationState } from "State/Navigation";

import { AboutRoute } from "./About";
import { ContactRoute } from "./Contact";
import { HomeRoute } from "./Home";

export const Routing = createBrowserRouter([
  HomeRoute,
  AboutRoute,
  ContactRoute,
]);

void NavigationState.update(state => {
  state.route = Routing.state.location.pathname;
});

const { navigate } = Routing;

(Routing as any).navigate = (to: To | null, opts?: any) => {
  void navigate(to, opts);
  if (to !== null) {
    void NavigationState.update(state => {
      state.route = to;
      state.menuOpen = false;
    });
  }
};
