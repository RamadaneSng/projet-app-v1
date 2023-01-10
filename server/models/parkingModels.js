const mongoose = require("mongoose");

const ParkingModel = mongoose.model(
    "app",
    {
        nomparking: {
            type: String,
            required: true
        },
        localisation: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        /*  image: {
              type: String,
              required: true
          }*/
    },
    "parking"
)

module.exports = { ParkingModel };