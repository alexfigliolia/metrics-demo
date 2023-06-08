import { Component, Fragment } from "react";
import { StopMetric } from "@figliolia/react-metrics";

import { HomeMetric } from "../Home";

import type { IUser } from "./types";
import { User } from "./User";

import "./Users.scss";

export class Users extends Component<object, State> {
  state: State = { users: [] };
  async componentDidMount() {
    const data = await fetch("https://randomuser.me/api?results=26");
    const { results }: { results: IUser[] } = await data.json();
    this.setState({ users: results });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="user-list">
        {users.length && (
          <Fragment>
            {this.state.users.map(({ name, email, location }, index) => {
              return (
                <User
                  key={email}
                  index={index}
                  first={name.first}
                  last={name.last}
                  email={email}
                  city={location.city}
                  state={location.state}
                />
              );
            })}
            <StopMetric metric={HomeMetric} />
          </Fragment>
        )}
      </div>
    );
  }
}

interface State {
  users: IUser[];
}
