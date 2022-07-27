const express = require('express');
const cors = require('cors')
const config = require('./config')

const router = require('./routes/index.routes')

const app = express();





app.use(express.json())

app.use(cors())

app.use('/api', router)

app.use(express.urlencoded({ extended: false }))




app.listen((config.PORT), () => {
    console.log("Server on port", config.PORT)
})