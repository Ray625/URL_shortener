const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortenerSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Shortener', shortenerSchema)