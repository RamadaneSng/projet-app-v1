import React from "react";
import Form from "../components/Form";

const SigUp = () => {
  return (
    <div className="sigup">
      <div className="logo">
        <img src="./assets/images/app3l_logo.jpg" alt="" />
      </div>
      <Form />
      <form action="">
        <div className="pseudo-container">
          <label htmlFor="pseudo">Nom d'utilisateur</label>
          <input type="text" autocomplete="off" id="pseudo" />
          <span></span>
        </div>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input type="text" autocomplete="off" id="email" />
          <span>Email incorrect</span>
        </div>
        <div className="password-container">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" autocomplete="off" id="password" />
          <p id="progress-bar"></p>
          <span></span>
        </div>
        <div className="confirm-container">
          <label htmlFor="confirm">Confirmer mot de passe</label>
          <input type="password" autocomplete="off" id="confirm" />
          <span></span>
        </div>
        <input type="submit" value="Inscription" />
      </form>
    </div>
  );
};

export default SigUp;
