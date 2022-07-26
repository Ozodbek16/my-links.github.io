const express = require('express')
const router = express.Router()
const Schema = require('../model/user')
const bcryp = require('bcrypt')
const Joi = require('joi')

router.get('/', (req, res) => {
    if (req.params.name) {
        console.log(req.params.name);
    }
    res.render('index', {
        title: 'Home'
    })
})

router.get('/registr', async (req, res) => {
    res.render('registr', {
        title: 'Registr'
    })
})

router.post('/register', async (req, res) => {
    const pass = await bcryp.hash(req.body.password, 10)
    req.body.password = pass

    const user = new Schema(req.body)
    await user.save()
    res.redirect('/')
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login',
        error: req.flash('error'),
    })
})

router.post('/login', async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    const result = schema.validate(req.body)

    if (result.error) {
        req.flash('error', 'Email or password is empty')
        res.redirect('/login')
        return
    }


    const user = await Schema.findOne({ email: req.body.email })
    if (user == null) {
        req.flash('error', 'Email or password incorrect')
        res.redirect('/login')
        return
    }

    const password = await bcryp.compare(req.body.password, user.password)

    if (!password) {
        req.flash('error', 'Email or password incorrect')
        res.redirect('/login')
        return
    }

    req.session.authen = true
    req.session.user = user
    req.session.save((err) => {
        if (err) throw err
        res.redirect('/user')
    })
})

module.exports = router