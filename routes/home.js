const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

router.get('/registr', (req, res) => {
    res.render('registr', {
        title: 'Registr'
    })
})

module.exports = router