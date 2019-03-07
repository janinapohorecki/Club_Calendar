const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello dawg!'))

app.listen(port, () => console.log(`CCP app listening on port ${port}!`))
