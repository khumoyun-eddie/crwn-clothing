import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="navigation__logo" to="/">
          <CrwnLogo />
        </Link>
        <div className="navigation__links">
          <Link className="navigation__link" to="/shop">
            Shop
          </Link>
          <Link className="navigation__link" to="/contact">
            Contact
          </Link>
          <Link className="navigation__link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
