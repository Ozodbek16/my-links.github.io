const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    settings: {
        color: {
            type: String,
            default: '#fff'
        },
        social: []
    }
})

module.exports = model('users', userSchema)