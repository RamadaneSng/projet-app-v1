const express = require('express');
const router = express.Router();
const parkingSchemaCopy = require('../models/parkingModel');

router.get('/gets', (req, res) => {
    parkingSchemaCopy.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data: " + err);
    })
});



router.get('/gets/:parkId', (req, res, next) => {
    const parkId = req.params.parkId;
    parkingSchemaCopy.findById(parkId)
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message: 'Invalid park ID' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
})


module.exports = router;