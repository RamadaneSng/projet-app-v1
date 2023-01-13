const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const parkingSchema = new Schema({
    nomparking: {
        type: String,
        required: true,
    },
    localisation: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    capacite:{
        type: String,
        required: true,
    },
    prix: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Parking', parkingSchema)



/*
const ParkingModel = new mongoose.model(
    "app",
    {
        nomparking: {
            type: String,
            required: true,
        },
        localisation: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true
        }
    },
    "parking"
);

module.exports = { ParkingModel };
*/