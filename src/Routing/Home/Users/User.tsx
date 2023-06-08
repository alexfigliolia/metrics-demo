import { Component } from "react";

export class User extends Component<Props> {
  state: State = { animate: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: true });
    }, 10);
  }

  render() {
    const { email, first, last, city, state, index } = this.props;
    return (
      <div
        key={email}
        className={`user ${this.state.animate ? "animate" : ""}`}
        style={{ transitionDelay: `${index * 25}ms` }}>
        <span className="user-name">
          {first} {last}
        </span>
        <div className="user-details">
          <span>
            {city}, {state}
          </span>
        </div>
      </div>
    );
  }
}

interface Props {
  index: number;
  email: string;
  first: string;
  last: string;
  city: string;
  state: string;
}

interface State {
  animate: boolean;
}
