const express = require('express')
const app = express()
const port = 3000

app.use(express.static('app-files'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}, to get to the tour go to http://localhost:${port}/index.html`)
})
