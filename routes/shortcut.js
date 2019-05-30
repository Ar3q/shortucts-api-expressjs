const express = require('express')
//mergeParams to perseve the req.params values from the parent router
const router = express.Router({ mergeParams: true })

const shortcutController = require('../controllers/shortcut')

router.route('/')
    .get((req, res, next) => {
        if(req.params.programId){
            shortcutController.findAllByProgramId(req, res, next)
        }
        shortcutController.findAll(req, res, next)
    })
    .post((req, res) => {
        shortcutController.create(req, res)
    })

router.route('/:shortcutId')
    .get((req, res, next) => {
        shortcutController.findOneById(req, res, next)
    })

module.exports = router