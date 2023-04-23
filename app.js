const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const generateGibberish = require('./generate_gibberish')
const Shortener = require('./models/shortener')
const app = express()

app.engine('hbs', exphbs({ defaultlayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 僅在非正式環境時, 使用 dotenv
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
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shortener/', (req, res) => {
  const url = req.body.url
  const gibberish = generateGibberish()
  res.render('show', { gibberish })
})

app.get('/shortener/:shortenUrl', (req, res) => {
  const shortenUrl = req.params.shortenUrl
  Shortener.find({ shortenUrl: { $regex: new RegExp(shortenUrl, 's') } })
    .then(shortener => res.redirect(shortener[0].url))
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log('app is running on http://localhost:3000')
})