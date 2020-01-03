const User = require('../models').users
const Event = require('../models').events
const Catgoery = require('../models').categories
const Favorite = require('../models').favorites

exports.showById = (req, res) => {
    User.findOne({
        where: { id: req.params.id }, attributes: ["id", "name", "phone_number", "email", "img"]
    }).then(user => res.send(user)).catch(err => res.send(err))
}
exports.showFavorites = (req, res) => {
    Favorite.findAll({
        include: [
            {
                model: Event, //attributes: ["id", "name"],
                as: "idEvents"
            }
        ],

        where: { users_id: req.params.id }
    }).then(favorite => res.send(favorite)).catch(err => res.send(err))
}
// exports.showFavorites = (req, res) => {
//     Event.findAll({
//         where: { users_id: req.params.id }
//     }).then(favorite => res.send(favorite)).catch(err => res.send(err))
// }
// exports.showById = (req, res) => {
//     Event.findAll({
//         include: [
//             {
//                 model: Category, attributes: ["id", "name"],
//                 as: "categoryId"
//             }, {
//                 model: User, attributes: ['id', 'name', 'phone_number', 'email', 'img'],
//                 as: "createBy"
//             }
//         ],
//         where: { id: req.params.id }
//     })
//         .then(event => res.send(event))
//         .catch(err => res.send(err))

// }
