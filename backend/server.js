const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


// middlewares

app.use(express.static('public'))
app.use(express.json())    // to parse JSON bodies




app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`))


