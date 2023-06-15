const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        minLength: 3,
        required: true
    },
    lname: {
        type: String,
        minLength: 3,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    type: {
        type: String,
        default: "user"
    },
    profilePic: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
    }
})

module.exports = mongoose.model("User", userSchema)