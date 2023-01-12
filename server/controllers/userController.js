const express = require('express');
const router = express.Router();

const { UserModel } = require('../models/userModel');

router.get('/', (req, res) =>{
    UserModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data: " + err); 
    })
});


router.post('/', (req, res) => {
    const newRecord = new UserModel({
        nom: req.body.nom,
        numero: req.body.numero,
        email: req.body.email,
        mdp: req.body.mdp
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    })
})

module.exports = router;