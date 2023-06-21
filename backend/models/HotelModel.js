const mongoose = require("mongoose")

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    country: {
        type: String,
        required: true,
        minLength: 5
    },
    city: {
        type: String,
        required: true,
        minLength: 5
    },
    logo: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/7/77/Hyatt_Regency_Danang%2C_Corporate_logo%2C_March_2014.png"
    },
})


module.exports = mongoose.model("Hotel", hotelSchema)

