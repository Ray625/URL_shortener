function sample(array) {
  const index = Math.floor(Math.random() * 62)
  return array[index]
}

function generateGibberish() {
  const collection = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890']

  let gibberish = ''

  for (let i = 0; i < 5; i++) {
    gibberish += sample(collection)
  }

  return gibberish
}

module.exports = generateGibberish