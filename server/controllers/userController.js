const express = require('express');
const router = express.Router();

const { UserModel } = require('../models/userModel');

router.get('/', (req, res) =>{
    UserModels.find((err, docs) => {
        console.log(docs);
    })
})

module.exports = router;