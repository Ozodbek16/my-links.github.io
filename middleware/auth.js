module.exports = (req, res, next) => {
    if (!req.session.authen) {
        res.redirect('/login')
    }
    next()
}