'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    event_order: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {});
  orders.associate = function (models) {
    // associations can be defined here
    orders.belongsTo(models.events, {
      as: 'eventOrder',
      foreignKey: 'event_order'
    })
    orders.hasMany(models.users, {
      as: 'usersId',
      foreignKey: 'users_id'
    })
  };
  return orders;
};