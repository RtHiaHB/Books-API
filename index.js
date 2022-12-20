require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()
const { PORT } = process.env

// middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cors())

//controller
app.use('/books', require('./controllers/books'))

//root route
app.get('/',(req, res) => {
    res.send('Hello World')
})

//listening on WBAB 102.3 FM
app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}...`)
})
