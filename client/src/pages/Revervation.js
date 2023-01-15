import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reservation = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [serie, setSerie] = useState("");

    const params = useParams()

    const [singleparking, setSingleParkingData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/reservation/posts', {
            nom: name,
            numero: number,
            vehicule: serie,
            nomparking: singleparking.nomparking,
            duree: "2",
            prix: "2000"
        })
    }

    console.log(name, number, serie);

    const addStorage = () => {
        let storedData = window.localStorage.parkings
            ? window.localStorage.parkings.split(",")
            : [];

        if (!storedData.includes(singleparking._id)) {
            storedData.push(singleparking._id);
            window.localStorage.parkings = storedData;
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/park/gets/${params.parkId}`).then((res) => {
            console.log(res)
            setSingleParkingData(res.data)
        }).catch(err => console.log(err))
    }, [params.parkId])
    return (
        <div className='reservation'>
            <div className="parking-features">
                <h3>{singleparking.nomparking}</h3>
                <p className='localisation'><i className="fa-solid fa-location-dot"></i> {singleparking.localisation}</p>
                <p className='places'><i className="fa-solid fa-square-parking"></i> {singleparking.capacite} Places disponibles</p>

                <a href="https://www.google.ci/maps/place/6CQQ8XGG%2BHG3/@5.3261729,-4.0238617,16.65z/data=!4m5!3m4!1s0x0:0x64325a91b353e2b2!8m2!3d5.3263875!4d-4.0237031" target="blank"><button><i className="fa-solid fa-diamond-turn-right"></i>Direction</button></a>
            </div>

            <div className="info">
                <h3>info</h3>
                <p>
                    {singleparking.description} .
                </p>
            </div>
            <div className="parking-time">
                <h3>Choisir le temps stationnmemt</h3>
                <div className='parking-time-container'>
                    <input type="checkbox" name="1hour" id="1hour" />
                    <label htmlFor="1hour">1 heure: 1000FCFA</label>
                    <input type="checkbox" name="2hour" id="2hour" />
                    <label htmlFor="2hour">2 heures: 2000 FCFA</label>
                    <input type="checkbox" name="3hour" id="3hour" />
                    <label htmlFor="3hour">3 heures: 3000 FCFA</label>
                    <input type="checkbox" name="4hour" id="4hour" />
                    <label htmlFor="4hour">4 heure: 4000 FCFA</label>
                    <input type="checkbox" name="5hour" id="5hour" />
                    <label htmlFor="5hour">5 heure: 5000 FCFA</label>
                </div>
            </div>
            <div className="payement-infos">
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" id="name" placeholder='votre nom' onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="numero">Numero de telephone</label>
                    <input type="text" name="numero" id="numero" placeholder='votre numro de telephone' onChange={(e) => setNumber(e.target.value)} />
                    <label htmlFor="car-number">Numero de serie de votre voiture</label>
                    <input type="text" name="car-number" id="car-number" placeholder='numero de serie de votre voiture' onChange={(e) => setSerie(e.target.value)} />

                    <div className="select-payement">
                        <h3>Méthode de paiement</h3>

                        <select name="payement" id="select-payement-means">
                            <option value="">Choisir une methode de payement</option>
                            <option value="OM"> Orange Money</option>
                            <option value="MOMO">Mtn Money</option>
                            <option value="FLOOZ">Mouv Money</option>
                        </select>

                    </div>

                    <div className="submit">
                        <input type="submit" value="payer" onClick={() => addStorage()} />
                    </div>

                </form>
            </div>



        </div >
    );
};

export default Reservation;