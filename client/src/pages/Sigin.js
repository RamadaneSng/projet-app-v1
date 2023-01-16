import React from "react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const Sigin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

  }

  if (isSubmitted) {
    navigate('/parking')
  }
  
  return (
    <div className="sigin">
      <div className="logo">
        <img src="./assets/images/app3l_logo.jpg" alt="" />
      </div>
      <Form />
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input type="text" autoComplete="off" id="email" />
          <span>Email incorrect</span>
        </div>
        <div className="password-container">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" autoComplete="off" id="password" />
          <p id="progress-bar"></p>
          <span></span>
        </div>

        <input type="submit" value="Connexion" />
      </form>
    </div>
  );
};

export default Sigin;
