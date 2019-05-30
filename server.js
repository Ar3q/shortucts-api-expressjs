const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const logger = require('morgan')

const models = require('./models')

const programRouter = require('./routes/program')
const systemRouter = require('./routes/system')
const keyRouter = require('./routes/key')
const sequenceRouter = require('./routes/sequence')
const shortuctRouter = require('./routes/shortcut')

app.use(logger('dev'))
app.use(express.json())

models.sequelize.sync().then(() => {
    // eslint-disable-next-line no-console
    console.log('OK')
})

// eslint-disable-next-line no-unused-vars
app.get('/', (req, res) => {
    // res.status(200).json({
    //     'ok': 'okej'
    // }) 
    throw new Error('Checking if errors handling works')
})

app.use('/programs', programRouter)
app.use('/systems', systemRouter)
app.use('/keys', keyRouter)
app.use('/sequences', sequenceRouter)
app.use('/shortcuts', shortuctRouter)

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.message)
    res.status(500).send(err.message)
})

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}!`)
})