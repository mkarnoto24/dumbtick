const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.users
const Event = require('../models').events
exports.login = (req, res) => {

    const username = req.body.username
    const password = req.body.password

    User.findOne({
        where: { username, password }, attributes: ["id", "name", "email", "username", "img"]
    }).then(users => {
        if (users) {
            const token = jwt.sign({ userId: users.id }, "final-test-key")

            res.send({
                message: "success!",
                users,
                token
            })
        } else {
            res.send({
                error: true,
                message: "Wrong Email or Password"
            })
        }
    })

}
exports.register = (req, res) => {
    User.create(req.body).then(users => {
        if (users) {
            const token = jwt.sign({ userId: users.id }, "final-test-key")
            res.send({
                users: { id: users.id, img: users.img },
                message: "success",
                token
            })
        } else {
            res.send({
                error: true,
                message: "Registration Failed!"
            })
        }
    })

}