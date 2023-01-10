import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <span>
        <i className="fa-solid fa-square-parking"></i>
      </span>
      <span>
        <i className="fa-solid fa-clock-rotate-left"></i>
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
