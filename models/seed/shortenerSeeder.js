const mongoose = require('mongoose')
const Shortener = require('../shortener')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected!')

  Shortener.create({
    url: 'http://google.com',
    shortenUrl: '9A9PE'
  })
    .catch(error => console.log(erroe))

  console.log('done')
})