//importações de framework
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('funcionando...')
})

const rotas = require('./rotas')
app.use('/api', rotas)

//pasta do frontend
app.use(express.static(__dirname + '/client'))

//porta do node
const port = 3001

//mensagem do console
app.listen(port, () => {
    console.log('o servidor está rodando em http://localhost', port)
})