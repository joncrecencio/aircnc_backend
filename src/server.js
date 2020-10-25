const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')
const app = express()

mongoose.connect('mongodb+srv://aircnc:aircnc@aircnc.4hadq.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query Aciona o query params para filtros
// req.params Acessar route params para edição e delete
// req.body acessar o copor da requisição


app.use(cors())
// Para que o express retorne o JSON de forma correta
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)
app.listen(3000)