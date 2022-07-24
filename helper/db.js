const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI, () => {
        console.log('MongoDB connected');
    })
}