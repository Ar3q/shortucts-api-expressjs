const express = require('express')
const router = express.Router()

const keyController = require('../controllers/key')

router.route('/')
    .get((req, res) => {
        keyController.findAll(req, res)
    })
    .post((req, res) => {
        keyController.create(req, res)
    })

router.route('/:keyId')
    .get((req, res) => {
        keyController.findById(req, res)
    })

module.exports = router