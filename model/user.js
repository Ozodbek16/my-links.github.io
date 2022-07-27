const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: true
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
        img: {
            type: String
        },
        color: {
            type: String,
            default: '#7979ff'
        },
        social: [
            {
                socialName: {
                    type: String,
                    required: true
                },
                link:{
                    type: String,
                    required: true
                }
            }
        ]
    }
})

module.exports = model('users', userSchema)