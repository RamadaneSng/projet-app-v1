import { NavLink } from "react-router-dom";

const Welcome = ({ content, link }) => {
  return (
    <div className="GetStart">
      <div className="main"></div>
      <div className="content">
        <h1>Akwaba sur Pramsk</h1>
        <h3>{content}</h3>
      </div>
      <div className="bottom-nav">
        <NavLink to="/inscription">
          <span>Passer</span>
        </NavLink>
        <NavLink to={link}>
          <button>Suivant</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;
