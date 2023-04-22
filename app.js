const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('hbs', exphbs({ defaultlayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('app is running on http://localhost:3000')
})