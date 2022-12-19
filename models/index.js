require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const { MONGO_URI } = process.env

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Book = require('./books')