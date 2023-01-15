import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import ResCard from '../components/ResCard';

const Commande = () => {
    const [reservationData, setReservationData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8080/reservation/gets`).then(res => setReservationData(res.data))
    }, [])
    return (
        <div className="commande">
            <h3 className='title'>Mes commandes</h3>
            <ul className="content">
                {reservationData.map((res) =>
                    <ResCard key={res._id} res={res} />
                )}
            </ul>
            <Nav />
        </div>
    );
};

export default Commande;