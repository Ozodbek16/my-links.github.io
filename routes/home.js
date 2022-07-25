const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

<<<<<<< Updated upstream
router.get('/registr', (req, res) => {
    res.render('registr', {
        title: 'Registr'
=======
router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
>>>>>>> Stashed changes
    })
})

module.exports = router