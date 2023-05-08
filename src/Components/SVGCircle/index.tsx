import { Component } from "react";

export class SVGCircle extends Component<Props> {
  shouldComponentUpdate({ radius }: Props) {
    return radius !== this.props.radius;
  }

  render() {
    const { radius } = this.props;

    return (
      <svg>
        <circle r={radius} cx="50%" cy="50%" />
        <defs>
          <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FF4B2B" />
            <stop offset="100%" stop-color="#FF416C" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

interface Props {
  radius: string;
}
