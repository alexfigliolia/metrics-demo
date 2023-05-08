import type { To } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { routeChange } from "Actions/Navigation";
import { Store } from "Tools/Store";

import { AboutRoute } from "./About";
import { ContactRoute } from "./Contact";
import { HomeRoute } from "./Home";

export const Routing = createBrowserRouter([
  HomeRoute,
  AboutRoute,
  ContactRoute,
]);

Store.dispatch(routeChange(Routing.state.location.pathname));

const { navigate } = Routing;

(Routing as any).navigate = (to: To | null, opts?: any) => {
  void navigate(to, opts);
  if (to !== null) {
    Store.dispatch(routeChange(to));
  }
};
