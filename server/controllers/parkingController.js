const express = require('express');
const router = express.Router();
const parkingSchemaCopy = require('../models/parkingModel');

router.get('/gets', (req, res) =>{
    parkingSchemaCopy.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data: " + err); 
    })
});


module.exports = router;