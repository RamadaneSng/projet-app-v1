import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ParkingDetails = () => {
    const params = useParams()

    const [singleparking, setSingleParkingData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/park/gets/${params.parkId}`).then((res) => {
            console.log(res)
            setSingleParkingData(res.data)
        }).catch(err => console.log(err))
    }, [params.parkId])
    return (
        <div>
            <h1>{singleparking.description}</h1>
            <p>{singleparking.localisation}</p>
        </div>
    );
};

export default ParkingDetails;