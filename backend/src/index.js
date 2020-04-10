const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes) //tem que ser abaixo do express.json
app.listen(3333)