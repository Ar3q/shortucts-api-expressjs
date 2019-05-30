const Sequelize = require('sequelize')
const Op = Sequelize.Op

const models = require('../models')
const Sequence = models.Sequence
const Key = models.Key
const System = models.System

exports.createSequence = async (sequence) => {
    let keys, systems
    try {
        keys = await Key.findAll({
            where: {
                id: {
                    [Op.or]: [sequence.keys]
                }
            }
        })

        systems = await System.findAll({
            where: {
                id: {
                    [Op.or]: [sequence.systems]
                }
            }
        })
    } catch (error) {
        // TODO error handling
    }

    let newSequence
    try {
        newSequence = await Sequence.create({
            description: sequence.description,
        })
        await newSequence.setSystems(systems)
        await newSequence.setKeys(keys)
    } catch (error) {
        // TODO error handling
    }

    return newSequence
}