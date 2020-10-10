const express = require('express')
const app = express()
const port = 4545

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the quotes server api'})
})

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})
