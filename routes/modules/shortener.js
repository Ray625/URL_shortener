const express = require('express')
const router = express.Router()

const Shortener = require('../../models/shortener')
const generateGibberish = require('../../generate_gibberish')

router.post('/', (req, res) => {
  const url = req.body.url
  const gibberish = generateGibberish()
  Shortener.findOne({ url })
    .lean()
    .then(shortener => {
      if (!shortener) {
        shortener = { url, shortenUrl: gibberish }
        Shortener.create(shortener)
        res.render('show', { shortener })
      } else {
        res.render('show', { shortener })
      }
    })
    .catch(error => console.log(error))
})



module.exports = router