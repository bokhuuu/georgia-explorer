// routing
import { Link, NavLink } from "react-router-dom";
// styles
import { StyledMainNavBrand } from "./MainNavStyles";
// icons
import geFlag from "../../assets/icons/flags/ge.svg";

interface MainNavLink {
  to: string;
  label: string;
}

interface MainNavProps {
  mainNavLinksList: MainNavLink[];
}

const MainRoute = ({ mainNavLinksList }: MainNavProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={geFlag}
            alt="georgian-flag"
            style={{
              borderRadius: "50%",
              height: "70px",
              transform: "translate(0,-25px)",
            }}
          />
          <StyledMainNavBrand>
            <span style={{ color: "rgb(12, 33, 151)" }}>Georgia</span>
            <br />
            <span style={{ color: "white" }}>Explorer</span>
          </StyledMainNavBrand>
        </Link>

        <button
          className="navbar-toggler mb-1 ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="row collapse navbar-collapse justify-content-end align-items-center"
          id="main-nav"
        >
          <ul className="col navbar-nav fw-bold ms-3 mt-1 justify-content-start">
            {mainNavLinksList.map((mainNavLink) => (
              <li className="nav-item" key={mainNavLink.to}>
                <NavLink
                  className="nav-link"
                  style={{ color: "rgb(12, 33, 151)", marginLeft: "10px" }}
                  to={mainNavLink.to}
                >
                  {mainNavLink.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainRoute;