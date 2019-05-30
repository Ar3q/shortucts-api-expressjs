const express = require('express')
const router = express.Router()

const programController = require('../controllers/program')

const shortcutsRouter = require('../routes/shortcut')

router.route('/')
    .get((req, res) => {
        programController.findAll(req, res)
    })
    .post((req, res) => {
        programController.createProgram(req, res)
    })

router.route('/:id')
    .get((req, res) => {
        programController.findById(req, res)
    })

router.use('/:programId/shortcuts', shortcutsRouter)

module.exports = router
