module.exports = async (req, res, next) => {
    if (!req.session.auth) {
        return next()
    }

    res.locals.user = req.session.user
    next()
}