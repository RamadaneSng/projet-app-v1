import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import Form from "../components/Form";

const SigUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8080/user/posts`, {
      nom: name,
      email: email,
      mdp: mdp,
    })
    setIsSubmitted(true);

  }

  if (isSubmitted) {
    navigate('/parking')
  }

  return (
    <div className="sigup">
      <div className="logo">
        <img src="./assets/images/app3l_logo.jpg" alt="" />
      </div>
      <Form />
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="pseudo-container">
          <label htmlFor="pseudo">Nom d'utilisateur</label>
          <input type="text" autoComplete="off" id="pseudo" onChange={(e) => setName(e.target.value)} />
          <span></span>
        </div>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input type="text" autoComplete="off" id="email" onChange={(e) => setEmail(e.target.value)} />
          <span>Email incorrect</span>
        </div>
        <div className="password-container">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" autoComplete="off" id="password" />
          <p id="progress-bar"></p>
          <span></span>
        </div>
        <div className="confirm-container">
          <label htmlFor="confirm">Confirmer mot de passe</label>
          <input type="password" autoComplete="off" id="confirm" onChange={(e) => setMdp(e.target.value)} />
          <span></span>
        </div>
        <input type="submit" value="Inscription" />
      </form>
      <div>vous avez déja un compte ? <NavLink to="/connexion"><h4>Connexion</h4></NavLink></div>
    </div>
  );
};

export default SigUp;
