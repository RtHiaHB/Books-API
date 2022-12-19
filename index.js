require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/books', require('./controllers/books'))

const { PORT } = process.env

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}...`)
})
