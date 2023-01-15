import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <span>
        <NavLink to="/parking">
          <i className="fa-solid fa-square-parking"></i>
        </NavLink>
      </span>
      <span>
        <NavLink to="/liste-des-commandes">
          <i className="fa-solid fa-clock-rotate-left"></i>
        </NavLink>
      </span>
      <span>
        <NavLink to="/compte">
          <i className="fa-regular fa-user"></i>{" "}
        </NavLink>
      </span>
    </div>
  );
};

export default Nav;
