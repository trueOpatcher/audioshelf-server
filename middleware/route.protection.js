module.exports = (req, res, next) => {
    if (!req.session.email) {
        return res.status(400).send({ message: 'User is not authenticated' });
    }
    next();
}