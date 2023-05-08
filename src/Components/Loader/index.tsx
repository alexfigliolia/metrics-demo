import { Component } from "react";

import "./Loader.scss";

export class Loader extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    );
  }
}
