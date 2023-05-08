import { Component, Fragment, Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { Header } from "Components/Header";
import { Menu } from "Components/Menu";
import { RouteLoader } from "Components/RouteLoader";
import { Routing } from "Routing";

export class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Fragment>
        <Menu />
        <div className="App">
          <Header />
          <div className="layout">
            <Suspense fallback={<RouteLoader />}>
              <RouterProvider router={Routing} />
            </Suspense>
          </div>
        </div>
      </Fragment>
    );
  }
}
