const Express = require('express')
const morgan = require('morgan')
const app = Express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const PORT = 64441

morgan("dev")

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/authentication', routes.authentication)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})