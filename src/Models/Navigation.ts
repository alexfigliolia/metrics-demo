import type { To } from "react-router";
import { State } from "@figliolia/galena";

export class NavigationModel extends State<INavigation> {
  public routeTransition(to: To) {
    this.update(state => {
      state.route = to;
      state.menuOpen = false;
    });
  }

  public toggleMenu() {
    this.update(state => {
      state.menuOpen = !state.menuOpen;
    });
  }
}

export interface INavigation {
  menuOpen: boolean;
  route: To | null;
}
