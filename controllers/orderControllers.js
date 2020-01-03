const Order = require('../models').orders
const Category = require('../models').categories
const User = require('../models').users
const Events = require('../models').events
exports.addOrder = (req, res) => {
    Order.create(req.body).then(order => {
        if (order) {
            res.send({
                message: "success",
                order
            })
        } else {
            res.send({
                error: true,
                message: "Order Failed!"
            })
        }
    })

}
exports.showOrderByStatus = (req, res) => {
    Order.findOne({
        include: [
            {
                model: Events,
                as: "eventOrder",
                include: [
                    {
                        model: Category, attributes: ["id", "name"],
                        as: "categoryId"
                    }, {
                        model: User, attributes: ['id', 'name', 'phone_number', 'email', 'img'],
                        as: "createBy"
                    }
                ]
            }
        ],
        where: { status: req.params.status }
    })
        .then(order => res.send(order))
        .catch(err => res.send(err))
}
exports.updateOrderStatus = (req, res) => {
    Order.update(req.body, ({
        where: { users_id: req.params.id }
    })).then(order => res.send({
        message: "Success!",
        order
    })).catch(err => res.send(err))
}