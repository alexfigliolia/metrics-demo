import { useNavigationState } from "State/Navigation";

import { Link } from "Components/Link";

import "./Menu.scss";

export const Menu = () => {
  const menuOpen = useNavigationState(state => state.menuOpen);
  return (
    <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <div>
        <Link to="/" text="Home" />
        <Link to="/about" text="About" />
        <Link to="/contact" text="Contact" />
      </div>
    </nav>
  );
};
