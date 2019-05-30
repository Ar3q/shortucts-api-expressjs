const models = require('../models')
const Key = models.Key

exports.create = async (req, res) => {
    let key
    try {
        key = await Key.create(req.body)
    } catch (error) {
        res.status(500).send(error.message)
    }

    res.status(201).json(key)
}

exports.findAll = async (req, res) => {
    let keys
    try {
        keys = await Key.findAll()
    } catch (error) {
        res.status(500).send(error.message)
    }

    res.status(200).json(keys)
}

exports.findById = async (req, res) => {
    let key
    try {
        key = await Key.findByPk(req.params.keyId)
    } catch (error) {
        res.status(500).send(error.message)
    }

    if (key === null){
        res.status(404).json({
            error: 'Not found'
        })    
    }

    res.status(200).json(key)
}