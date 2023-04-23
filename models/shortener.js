const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortenerSchema = New Schema({
  URL: {
    type: String,
    required: true
  },
  shortenURL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Shortener', shortenerSchema)