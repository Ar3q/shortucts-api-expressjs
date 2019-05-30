const express = require('express')
const router = express.Router()

const sequenceController = require('../controllers/sequence')

router.route('/')
    .get((req, res) => {
        sequenceController.findAll(req, res)
    })
    .post((req, res) => {
        sequenceController.create(req, res)
    })

router.route('/:sequenceId')
    .get((req, res) => {
        sequenceController.findById(req, res)
    })

module.exports = router