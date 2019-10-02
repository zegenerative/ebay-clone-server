const express = require('express')
const app = express()
const cors = require('cors')
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

app.use(corsMiddleware)
app.use(jsonParser)

app.listen(port, listenOnPort)

const port = process.env.PORT || 4000

listenOnPort = () => {
    console.log(`Listening on port: ${port}`)
}