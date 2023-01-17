import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {


  return (
    <div className="app profile">
      <header>
        <span>
          <NavLink to="/compte">
            <i className="fa-solid fa-arrow-left"></i>
          </NavLink>
        </span>
        <h3>Mon Profile</h3>
      </header>

      <div className="content">
        <div className="profile-pic">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <div className="profile-pic-edit">
            <i className="fa-sharp fa-solid fa-camera"></i>
          </div>
        </div>

        <div className="user-infos">
          <div>
            <span>
              <i className="fa-regular fa-user"></i>
            </span>
            <div className="user-info-edit">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" autoComplete="off" value="sanogo" />
            </div>
          </div>
          <div>
            <span>
              <i className="fa-regular fa-envelope"></i>
            </span>
            <div className="user-info-edit">
              <label htmlFor="email">Email</label>
              <input type="text" id="name" autoComplete="off" value="sanogo@gmail.ci" />
            </div>
          </div>
          {/* <div>
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <div className="user-info-edit">
              <label htmlFor="phone">Numero de telephone</label>
              <input type="text" id="phone" autoComplete="off" />
            </div>
          </div> */}
          <div>
            <span>
              <i className="fa-sharp fa-solid fa-key"></i>
            </span>
            <div className="user-info-edit">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" autoComplete="off" value="**********"/>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button>Enregistrer</button>
      </div>
    </div>
  );
};

export default Profile;
