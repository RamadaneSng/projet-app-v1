import React, { useEffect, useState } from "react";
import axios from 'axios'
import Header from "../components/Header";
import Nav from "../components/Nav";
import Card from "../components/Card";

const Findparking = () => {

  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:8080/park/gets`).then((res) => setParkingData(res.data))
  }, [])
  return (
    <div className="app">
      <Header />
      <h1>Parkings Disponibles</h1>
      <ul className="parking-container">
        {parkingData.map((park) => (
          <Card park={park} key={park._id} />
        ))}
      </ul>
      <Nav />
    </div>
  );
};

export default Findparking;
