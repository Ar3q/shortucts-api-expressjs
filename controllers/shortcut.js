const models = require('../models')
const Shortcut = models.Shortcut
const Program = models.Program

const sequenceService = require('../services/sequence')

exports.create = async (req, res, next) => {
    let sequences = req.body.sequences

    let sequencesFromDb = []
    for (const seqence of sequences) {
        let newSequence = await sequenceService.createSequence(seqence)
        sequencesFromDb.push(newSequence)
    }

    let program
    try {
        program = await Program.findByPk(req.params.programId)
    } catch (error) {
        next(error)
    }

    let shortcut
    try {
        shortcut = await Shortcut.create({
            name: req.body.name,
            description: req.body.description
        })
    } catch (error) {
        next(error)
    }

    shortcut.setProgram(program)
    shortcut.setSequences(sequencesFromDb)

    const response = {
        shortcut: shortcut,
        sequences: sequencesFromDb,
        program: program
    }

    res.status(201).json(response)
}

exports.findAllByProgramId = async (req, res) => {
    let shortcuts
    try {
        shortcuts = await Shortcut.findAll({
            where: {
                ProgramId: req.params.programId
            },
            include: {
                model: models.Sequence,
                include: [{
                    model: models.Key
                },{
                    model: models.System
                }]
            }
        })
    } catch (error) {
        res.status(500).send(error.message)
    }

    res.status(200).json(shortcuts)
}

exports.findAll = async (req, res) => {
    let shortcuts
    try {
        shortcuts = await Shortcut.findAll({
            include: {
                model: models.Sequence,
                include: [{
                    model: models.Key
                },{
                    model: models.System
                }]
            }
        })
    } catch (error) {
        res.status(500).send(error.message)
    }

    res.status(200).json(shortcuts)
}

exports.findOneById = async (req, res, next) => {
    let shortcut
    try {
        shortcut = await Shortcut.findByPk(req.params.shortcutId, {
            include: [{
                all: true,
                nested: true
            }]
        })
    } catch (error) {
        next(error)
    }

    res.status(200).json(shortcut)
}