import type { To } from "react-router";

export const toggleMenu = () => {
  return { type: "TOGGLE_MENU" };
};

export const routeChange = (to: To) => {
  return { type: "ROUTE_CHANGE", to };
};
