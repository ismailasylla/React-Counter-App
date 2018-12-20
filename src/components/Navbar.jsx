import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  branding: "Counters-App"
};

Navbar.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Navbar;
