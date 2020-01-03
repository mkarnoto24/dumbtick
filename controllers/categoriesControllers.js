const Category = require('../models').categories

exports.index = (req, res) => {

    Category.findAll({ attributes: ['id', 'name'] })
        .then(categories => res.send(categories))
        .catch(err => res.send(err))
}
