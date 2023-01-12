const mongoose = require("mongoose");

const UserModel = mongoose.model(
    "app",
    {
        nom: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        numero: {
            type: String,
            required: true,
        },
        mdp: {
            type: String,
            required: true,
        }
    },
    "user"
)

module.exports = { UserModel };