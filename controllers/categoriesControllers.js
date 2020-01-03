const Category = require('../models').categories

exports.index = (req, res) => {

    Category.findAll({ attributes: ['id', 'name'] })
        .then(categories => res.send(categories))
        .catch(err => res.send(err))
}
exports.addCategory = (req, res) => {
    Category.create(req.body).then(category => {
        if (category) {
            res.send({
                message: "success",
                category
            })
        } else {
            res.send({
                error: true,
                message: "Order Failed!"
            })
        }
    })

}