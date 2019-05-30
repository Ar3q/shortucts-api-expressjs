const models = require('../models')
const Sequence = models.Sequence

const sequenceService = require('../services/sequence')

exports.create = async (req, res, next) => {
    let sequence
    try {
        sequence = await sequenceService.createSequence(req.body)
    } catch (error) {
        next(error)
    }

    res.status(201).json(sequence)
}

exports.findAll = async (req, res) => {
    let sequences
    try {
        sequences = await Sequence.findAll({
            // include: [{
            //     model: System,
            //     as: 'Systems'
            // }]
            where:{
                
            },
            include: [{
                all: true,
                nested: false
            }]
        })
    } catch (error) {
        res.status(500).send(error.message)
    }

    res.status(200).json(sequences)
}

exports.findById = async (req, res) => {
    let sequence
    try {
        sequence = await Sequence.findByPk(req.params.sequenceId, {
            include: [{
                all: true,
                nested: false
            }]
        })
    } catch (error) {
        res.status(500).send(error.message)
    }

    res.status(200).json(sequence)
}