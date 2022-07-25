const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('user', {
        title: 'User'
    })
})

module.exports = router