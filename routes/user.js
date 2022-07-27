const express = require('express')
const router = express.Router()
const controller = require('../controllers/user/index')
const upload = require('../middleware/upload')

router.get('/', controller.user)

router.get('/logout', controller.logout)

router.get('/edit', controller.editPage)

router.post('/edit/name/:name', upload.single('img'), controller.editName)

router.post('/edit/link/:name', controller.newUrl)

module.exports = router