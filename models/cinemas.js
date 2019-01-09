const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CinemaSchema = new Schema({
  cinemaID: {
    type: String,
    required: true,
    lowercase: true
  },
  movie: {
    type: String,
    required: true,
    lowercase: true
  },
  timestamp: {
    type: Number
  }
})

module.exports = Cinemas = mongoose.model('cinemas', CinemaSchema)
