const express = require('express')
const router = express.Router()

const logger = require('../utils/logger')

const Cinemas = require('../models/cinemas')
const Histories = require('../models/histories')

const response = ( status, data, res ) => {
	res.status( status )
	res.send( JSON.stringify( data ) )
}

router.get('/:key', async(req, res) => {
  try {
    const cinemaID = req.params.key.toLowerCase()
    const {timestamp} = req.query
    let cinema
    if (timestamp) {
      cinema = await Histories.findOne({cinemaID,timestamp}) || {}
    } else {
      cinema = await Cinemas.findOne({cinemaID},{cinemaID:1, movie:1}).lean() || {}
    }

    response( 200, {[cinema.cinemaID]:cinema.movie}, res)
  } catch (e) {
    logger(e)
    response( 400, {error: 'error_fetching_data'}, res)
  }
})

router.post('/', async(req, res) => {
  try {
    const cinemaID = Object.keys(req.body)[0]
    const movie = req.body[cinemaID]
    const timestamp = (new Date()).getTime()
    let result

    const isExists = await Cinemas.findOne({cinemaID}).lean()
    if(isExists) {
      result = await Cinemas.updateOne({cinemaID},{$set:{movie}})
    } else {
      result = await Cinemas.create({cinemaID,movie,timestamp})
    }

    Histories.create({ refID:result._id, cinemaID, movie, timestamp })

    response( 200, { "key":cinemaID, "value":movie, timestamp }, res )
  } catch (e) {
    logger(e)
    response( 400, {error: 'error_posting_data'}, res)
  }
})

module.exports = router
