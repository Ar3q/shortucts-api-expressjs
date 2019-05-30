const models = require('../models')
const System = models.System

exports.createSystem = async (req, res) => {
    let system
    try {
        system = await System.create(req.body)
    } catch (err) {
        res.status(500).send(err.message)
    }
    res.status(201).json(system)
}

exports.findAll = async (req, res) => {
    let systems
    try {
        systems = await System.findAll()
    } catch (err) {
        res.status(500).send(err.message)
    }

    if (systems === null) {
        res.status(404).json({
            error: 'Not found'
        })    
    }

    res.status(200).json(systems)
}

exports.findById = async (req, res) => {
    let system
    try {
        system = await System.findByPk(req.params.systemId)
    } catch (err) {
        res.status(500).send(err.message)
    }

    if (system === null) {
        res.status(404).json({
            error: 'Not found'
        })    
    }

    res.status(200).json(system)
}