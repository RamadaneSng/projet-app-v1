const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    vehicule: {
        type: String,
        required: true,
    },
    nomparking: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: false,
        default: Date.now()

    },
    duree: {
        type: String,
        required: true,
    },
    prix: {
        type: String,
        // required: true
        default: 1000,
    },
});

module.exports = mongoose.model('Reservation', reservationSchema);

