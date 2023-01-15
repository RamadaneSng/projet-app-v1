import React from 'react';

const ResCard = ({ res }) => {

    const dateFormateur = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        });

        return newDate;
    }

    return (
        <li className="card">
            <h3 className='serie'>{res.vehicule}</h3>
            <h3 className='price'>{res.prix} FCFA</h3>
            <div className="header">
                <h4>Commande pour: <span> {res.nom}</span>
                </h4>
            </div>
            <div className="main">
                <h3>{res.nomparking}</h3>
                <p> <i className="fa-regular fa-calendar-days"></i>{dateFormateur(res.date)} </p>
            </div>
        </li>
    );
};

export default ResCard;