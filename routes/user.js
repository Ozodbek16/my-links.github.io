const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const user = res.locals.user
    res.render('user', {
        title: 'User',
        layout: 'main',
        user
    })
})

router.get('/logout', async (req, res) => {
    await req.session.destroy((err) => {
        if (err) console.log(err);
        else res.redirect('/')
    })
})

module.exports = router