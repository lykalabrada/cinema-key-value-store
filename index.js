const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const routes = require('./services/')

const app = express()

// Body parser middleware
app.use(bodyParser.json())

// DB Config
const db = require('./config').mongoURI

// Connect to MongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// API Routes
app.use('/v1/cinema', routes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
