const express = require('express')
const app = express()
const cors = require('cors')
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const adRouter = require('./advertisement/router')
const port = process.env.PORT || 4000

listenOnPort = () => {
    console.log(`Listening on port: ${port}`)
}

app.use(corsMiddleware)
app.use(jsonParser)
app.use(adRouter)

app.listen(port, listenOnPort)
