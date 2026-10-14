const express = require('express')
const {addDays, format} = require('date-fns')

const app = express()

app.get('/', (request, response) => {
  const today = new Date()
  const futureDate = addDays(today, 100)
  const formattedDate = format(futureDate, 'dd/MM/yyyy')

  response.send(formattedDate)
})

module.exports = app
