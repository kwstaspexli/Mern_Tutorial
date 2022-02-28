const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded( { extended: false }))
// mporw na xrhsimopoihsw text gia na parw dedomena apo to body

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`))

