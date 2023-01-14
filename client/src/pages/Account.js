import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";

const Account = () => {
  return (
    <div className="app account">
      <header>
        <h3>Mon Compte</h3>
      </header>
      <div className="content">
        <NavLink to="/profile"> 
          <div>
            <span>
              <i className="fa-regular fa-user"></i>
            </span>
            <p>Mon Profile</p>
          </div>
        </NavLink>
        <div>
          <span>
            <i className="fa-regular fa-bell"></i>
          </span>
          <p>Notifications</p>
        </div>
        <div>
          <span>
            <i className="fa-regular fa-circle-question"></i>
          </span>
          <p>Aide</p>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Account;
