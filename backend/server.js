const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000





app.use(express.static('./public'))
app.use(express.json())   
app.set('view engine', 'ejs')


app.get('/', (req,res) => {

    res.render('content')
})


app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`))

