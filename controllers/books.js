const router = require('express').Router()
const db = require('../models/index')

router.get('/', (req, res) => {
    db.Book.find()
        .then((books) => {
            res.send(books)
        })
        .catch((err) => {
            console.log("Error while trying to retrieve books", err)
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.Book.findById(id)
        .then((book) => {
            res.send(book)
        })
        .catch((err) => {
            console.log("Error while trying to find this book.", err)
        })
})

router.post('/', async (req, res) => {
    await db.Book.create(req.body)
        .catch(err => {
            console.log("Error while trying to save this book", err)
        })
    res.status(200).send('done')
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    await db.Book.findByIdAndUpdate(id, req.body)
        .catch(err => {
            console.log('PUT error!', err)
            res.status(400).send(err)
        })
    res.status(200).send('Successfully updated')
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await db.Book.findByIdAndDelete(id)
        .catch(err => {
            res.status(400).send(err)
        })
    res.status(200).send('done')
})

module.exports = router