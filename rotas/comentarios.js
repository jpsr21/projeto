const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) =>{
    res.json({
        conteudo: "Teste",
        autor: "Desconhecido"
    })
})

module.exports = router