const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) =>{
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: "Teste",
        autor: "João Paulo"
    })
})

module.exports = router