const express = require('express');
const router = express.Router();
const reservationSchemaCopy = require('../models/reservationModel');

router.get('/gets', (req, res) =>{
    reservationSchemaCopy.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data: " + err); 
    })
});

router.post('/posts', (req, res) => {
    const newReservation = new reservationSchemaCopy({
        nom: req.body.nom,
        numero: req.body.numero,
        vehicule: req.body.vehicule,
        nomparking: req.body.nomparking,
        date: req.body.date,
        duree: req.body.duree,
        prix: req.body.prix,
    });

    newReservation.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    })
})


module.exports = router;