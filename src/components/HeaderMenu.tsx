import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="yellow"
              className="bi bi-egg-fried"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
            </svg>{" "}
            Fix Your Diet
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-profile">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-plans">
                My Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                Contact Expert
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMenu;
