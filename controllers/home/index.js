const Schema = require('../../model/user')
const bcryp = require('bcrypt')
const Joi = require('joi')

module.exports = {
    async home(req, res) {
        res.render('index', {
            title: 'Home'
        })
    },
    async registr(req, res) {
        res.render('registr', {
            title: 'Registr'
        })
    },
    async register(req, res) {
        const pass = await bcryp.hash(req.body.password, 10)
        req.body.password = pass

        const user = new Schema(req.body)
        await user.save()
        res.redirect('/')
    },
    async loginPage(req, res) {
        res.render('login', {
            title: 'Login',
            error: req.flash('error'),
        })
    },
    async login(req, res) {

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
    }

}