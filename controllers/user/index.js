const deleteImg = require('../../middleware/deleteImg')
const SchemaU = require('../../model/user')

module.exports = {
    async user(req, res) {
        const user = await SchemaU.findById(res.locals.user._id)
        res.render('user', {
            title: 'User',
            layout: 'main',
            user,
            isHome: true
        })
    },
    async logout(req, res) {
        await req.session.destroy((err) => {
            if (err) console.log(err);
            else res.redirect('/')
        })
    },
    async editPage(req, res) {
        const user = await SchemaU.findById(res.locals.user._id)
        res.render('edit', {
            title: 'Edit',
            layout: 'main',
            user,
            isEdit: true,
            error: req.flash('error')
        })
    },
    async editName(req, res) {
        const user = await SchemaU.findOne({ firstname: req.params.name })
        const users = await SchemaU.find({ firstname: req.params.name })
        if(users.length > 0){
            req.flash('error', 'Name is already taken')
            res.redirect('/user/edit')
            return
        }

        if (req.file && user.settings.img) {
            req.body.img = req.file.filename
            await deleteImg(user.settings.img)
        } else if (user.settings.img) {
            req.body.img = user.settings.img
        } else if (req.file) {
            req.body.img = req.file.filename
        } else {
            req.body.img = ''
        }
        if (!req.body.firstname) {
            req.flash('Name is required')
            res.redirect('/user/edit')
            return
        }

        await SchemaU.findOneAndUpdate({ firstname: req.params.name }, {
            // firstname: req.body.firstname,
            $set: { 'settings.img': req.body.img, 'firstname': req.body.firstname }
        })
        res.redirect('/user')
    },
    async newUrl(req, res) {
        if (req.body.link.indexOf('http://') != -1) {
            req.body.link = req.body.link.slice(7)
        }else if(req.body.link.indexOf('https://') != -1){
            req.body.link = req.body.link.slice(8)
        }
        await SchemaU.findOneAndUpdate({ firstname: req.params.name }, {
            $push: { 'settings.social': req.body }
        })
        res.redirect('/user')
    }
}