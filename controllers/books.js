const router = require('express').Router()
const db = require('../models/index')

router.get('/', (req, res) => {
    db.Book.find()
        .then((books) => {
            res.status(200).json(books)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.Book.findById(id)
        .then((book) => {
            res.status(200).json(book)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

router.post('/', (req, res) => {
    db.Book.create(req.body)
        .then((book) => {
            res.status(200).json(book)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    db.Book.findByIdAndUpdate(id, req.body, {new: true})
        .then((book) => {
            res.status(200).json(book)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    db.Book.findByIdAndDelete(id)
        .then(() => {
            let goodMessage = {
                'message': 'Successfully deleted'
            }
            res.status(200).json(goodMessage)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router