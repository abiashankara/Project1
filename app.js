const express = require('express')
const app = express()
const port = 3000
const Calculate = require('./routes/calculator')
const Index = require('./routes/index')

// app.use('/calculate', Calculate)

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', Index)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))