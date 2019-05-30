const express = require('express')
const router = express.Router()

const systemController = require('../controllers/system')

router.route('/')
    .get((req, res) => {
        systemController.findAll(req, res)
    })
    .post((req, res) => {
        systemController.createSystem(req, res)
    })

router.route('/:systemId')
    .get((req, res) => {
        systemController.findById(req, res)
    })

module.exports = router