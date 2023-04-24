const express = require('express')
const router = express.Router()

const Shortener = require('../../models/shortener')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:shortenUrl', (req, res) => {
  const shortenUrl = req.params.shortenUrl
  Shortener.findOne({ shortenUrl })
    .lean()
    .then(shortener => {
      if (!shortener) {
        res.render('error')
      } else {
        res.redirect(shortener.url)
      }
    })
    .catch(error => console.log(error))
})

module.exports = router