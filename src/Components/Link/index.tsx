import type { FC, MouseEvent } from "react";
import { useNavigationState } from "State/Navigation";

import { Routing } from "Routing";
import { NavigationMetric } from "Tools/Metrics";

export const Link: FC<{
  to: string;
  text: string;
}> = ({ to, text }) => {
  const active = useNavigationState(({ route }) => route === to);

  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    void Routing.navigate(to);
    NavigationMetric.succeed();
  };

  return (
    <div className={`link ${active ? "active" : ""}`}>
      <a onClick={navigate}>{text}</a>
    </div>
  );
};
