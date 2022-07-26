const SchemaU = require('../../model/user')

module.exports = {
    async user(req, res) {
        const user = res.locals.user
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
        res.render('edit', {
            title: 'Edit',
            layout: 'main',
            isEdit: true
        })
    },
    async editName(req, res) {
        const user = await SchemaU.findOne({ firstname: req.params.name })

        if (req.file) {
            req.body.img = req.file.filename
        } else {
            req.body.img = user.settings.img
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
    }
}