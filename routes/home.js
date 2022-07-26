const express = require('express')
const router = express.Router()

const home = require('../controllers/home/index')

router.get('/', home.home)

router.get('/registr', home.registr)

router.post('/register', home.register)

router.get('/login', home.loginPage)

router.post('/login', home.login)

// router.get('/:name', home.name)

module.exports = router