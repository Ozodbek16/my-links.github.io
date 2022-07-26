module.exports = (req, res, next) => {
    if (!req.session.authen) {
        res.redirect('/login')
        return
    }
    res.locals.user = req.session.user
    next()
}