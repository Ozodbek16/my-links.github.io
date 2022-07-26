const express = require('express')
const router = express.Router()
const controller = require('../controllers/user/index')

router.get('/', controller.user)

router.get('/logout', controller.logout)

module.exports = router