const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HistorySchema = new Schema({
  refID: {
    type: Schema.Types.ObjectId,
		ref : 'Cinemas'
  },
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

module.exports = Histories = mongoose.model('histories', HistorySchema)
