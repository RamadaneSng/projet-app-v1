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
            <div className="header">
                <div className="header-left">
                    <h3>{res.vehicule}</h3>
                    <h4>Commande pour: {res.nom}</h4>
                </div>
                <div className="header right">
                    <h3>{res.prix} FCFA</h3>
                </div>
            </div>
            <div className="main">
                <h3>{res.nomparking}</h3>
                <p> <i className="fa-regular fa-calendar-days"></i>date de reservation: {dateFormateur(res.date)} heures</p>
            </div>
        </li>
    );
};

export default ResCard;