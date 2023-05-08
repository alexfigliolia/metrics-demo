import type { RouteObject } from "react-router";

export const ContactRoute: RouteObject = {
  path: "/Contact",
  lazy: async () => {
    const { Contact } = await import("./Contact");
    return { Component: Contact };
  },
};
