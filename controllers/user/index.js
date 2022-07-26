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
    }
}