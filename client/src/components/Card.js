import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ park }) => {
    return (

        <li className='card'>

            <div className="left">
                <h3>{park.nomparking}</h3>
                <h4>capacité: <span> {park.capacite} </span>places</h4>
                <p>prix du stationement par heure: <span> {park.prix} </span>FCFA</p>
                <NavLink to={`/${park._id}`}>
                    <button>Reserver</button>
                </NavLink>
            </div>

            <div className="right">
                <img src="./assets/images/parking-img.webp" alt="" />
            </div>


        </li >

    );
};

export default Card;