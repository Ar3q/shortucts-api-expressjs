const models = require('../models')

exports.createProgram = async (req, res) => {
    let program
    try {
        program = await models.Program.create(req.body)
    } catch (err) {
        res.status(500).send(err.message)
    }
    res.status(201).json(program)
}

exports.findAll = async (req, res) => {
    let programs
    try {
        programs = await models.Program.findAll()
    } catch (err) {
        res.status(500).send(err)
    }

    if (programs === null) {
        res.status(404).json({
            error: 'Not found'
        })    
    }

    res.status(200).json(programs)
}

exports.findById = async (req, res) => {
    let program
    try {
        program = await models.Program.findByPk(req.params.id)
    } catch (err) {
        res.status(500).send(err)
    }

    if (program === null) {
        res.status(404).json({
            error: 'Not found'
        })    
    }

    res.status(200).json(program)
}