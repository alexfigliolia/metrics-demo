import type { RouteObject } from "react-router";

export const HomeRoute: RouteObject = {
  path: "/",
  lazy: async () => {
    const { Home } = await import("./Home");
    return { Component: Home };
  },
};
