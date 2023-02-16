const isAuthenticated = (req,res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/users/registration')
    }
}

module.exports = isAuthenticated