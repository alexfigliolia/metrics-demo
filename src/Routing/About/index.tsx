import type { RouteObject } from "react-router";

export const AboutRoute: RouteObject = {
  path: "/about",
  lazy: async () => {
    const { About } = await import("./About");
    return { Component: About };
  },
};
