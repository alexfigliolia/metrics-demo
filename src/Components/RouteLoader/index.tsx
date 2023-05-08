import { Component } from "react";

import { Loader } from "Components/Loader";

import "./RouteLoader.scss";

export class RouteLoader extends Component {
  render() {
    return (
      <div className="route-loader">
        <Loader />
      </div>
    );
  }
}
