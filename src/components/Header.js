import React from "react";

const Header = () => {
  return (
    <div className="parkingFinder-header">
      <div className="search-bar">
        <input type="text" placeholder="Rechercher un parking" />
        <span id="search">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </span>
        {/* <span id="filter">
          <i className="fas fa-sliders-h"></i>
        </span> */}
      </div>
      {/* <div div className="car-selection">
        <span>
          <i className="fa-solid fa-car"></i>
        </span>
        <span>
          <i className="fa-sharp fa-solid fa-person-biking"></i>
        </span>
        <span>
          <i className="fa-solid fa-truck"></i>
        </span>
      </div> */}
    </div>
  );
};

export default Header;
