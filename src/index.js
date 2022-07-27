const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const config = require('./config')

const router = require('./routes/index.routes')

const app = express();





app.use(express.json())

app.use(morgan('dev'))

app.use(cors())

app.use(router)





app.listen((config.PORT), () => {
    console.log("Server on port", config.PORT)
})